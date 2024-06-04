import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

function PostHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar size={"sm"} alt="user profile pic" src="/img1.png" />
        <Flex fontSize={12} fontWeight={"bold"} gap="2">
          asaprogrammer
        <Box color={"gray.500"}>. 1W</Box>
        </Flex>
      </Flex>
      <Box>
        <Text 
        fontSize={12}
        color={'blue.200'}
        >
            Unfollow
        </Text>
      </Box>
    </Flex>
  );
}

export default PostHeader;
