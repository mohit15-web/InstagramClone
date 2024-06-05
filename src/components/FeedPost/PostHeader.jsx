import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

function PostHeader({username, avatar}) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} mt={2}>
      <Flex gap={2} alignItems={"center"} my={3}>
        <Avatar size={"sm"} alt="user profile pic" src={  avatar} />
        <Flex fontSize={12} fontWeight={"bold"} gap="2">
          {username}
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
