import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";

function SuggestedUser({ name, followers, avatar }) {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      mt={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar size={"md"} alt="user profile pic" src={avatar} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        fontWeight={"medium"}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "UnFollow" : "Follow"}
      </Button>
    </Flex>
  );
}

export default SuggestedUser;
