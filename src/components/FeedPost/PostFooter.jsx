import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

function PostFooter({ username }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <Box mb={10}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} pb={4} mt={4}>
        <Box cursor={"pointer"} fontSize={18} onClick={handleLike}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>

      <Text fontWeight={700} fontSize={"sm"}>
        {username}{" "}
        <Text as="span" fontWeight={400}>
          Feeling good
        </Text>
      </Text>
      <Text color={"gray"} fontSize={"sm"}>
        View all 1,000 comments
      </Text>
      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            placeholder="Add a comment..."
            fontSize={14}
            variant={"flushed"}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.400"}
              fontWeight={600}
              bg={"transparent"}
              _hover={{
                color: "white",
              }}
              cursor={"pointer"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}

export default PostFooter;
