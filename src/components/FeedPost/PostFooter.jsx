import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";

function PostFooter() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} pb={4} mt={"auto"}>
        <Box
        cursor={"pointer"}
        fontSize={18}

        >{!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box>
            <CommentLogo
        </Box>
      </Flex>
    </>
  );
}

export default PostFooter;
