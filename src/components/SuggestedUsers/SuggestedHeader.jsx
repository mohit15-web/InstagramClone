import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom"
function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar src="/profilepic.png" size={"lg"} name="user profile pic" />
        <Text fontSize={12} fontWeight={"bold"}>
          programmer
        </Text>
      </Flex>
      <Link
      as={RouterLink}
      to={"/auth"}
      fontSize={14}
      fontWeight={"medium"}
      color={'blue.400'}
      style={{textDecoration:"none"}}
    cursor={"pointer"}
      >
      Log out
      </Link>
    </Flex>
  );
}

export default SuggestedHeader;
