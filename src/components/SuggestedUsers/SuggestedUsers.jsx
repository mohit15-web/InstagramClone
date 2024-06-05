import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

function SuggestedUsers() {
  return (
    <VStack py={8} px={4} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.400"}>
          See All
        </Text>
      </Flex>

      <SuggestedUser name="mohit" followers={10000} avatar="/profilepic.png" />
      <SuggestedUser name="user 2" followers={10000} avatar="/profilepic2.png" />
      <SuggestedUser name="user 4" followers={10000} avatar="/profilepic3.png" />

      <Box
      fontSize={12} mt={5} color={"gray.500"} alignSelf={"start"}>
        @2024 Built By {" "}
        <Link href="https://github.com/mohit15-web" target="_blank" color={'blue.500'} fontSize={14}>
          Mohit
        </Link>
      </Box>
    </VStack>
  );
}

export default SuggestedUsers;
