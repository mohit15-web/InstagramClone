import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

function AuthPage() {
  return (
    <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"} px={4}>
      <Container maxW={Container.lg} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>


          {/* left hand side  */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={600} alt="Phone img" />
          </Box>


          {/* Right hand-side  */}
          <VStack spacing={2} align={"stretch"} w='80%'>
            <AuthForm />
            <Box textAlign={"center"} >Get the app.</Box>
            <Flex gap={5} justifyContent={"center"} w={'110%'} alignItems={"center"}>
              <Image src="/playstore.png" h={"10"} alt="playstore" />
              <Image src="/microsoft.png" h={"10"} alt="microsoft" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AuthPage;
