import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";

function Sidebar() {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Dan Abrahmov" src="/profilepic.png" />,
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];

  return (
    <Box
      h={"100vh"}
      borderRight={"1px solid"}
      borderColor={"WhiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <RouterLink to={"/"}>
          <Box
            display={{ base: "none", md: "block" }}
            pl={2}
            cursor={"pointer"}
          >
            <InstagramLogo />
          </Box>
        </RouterLink>
        <RouterLink to={"/"}>
          <Box
            display={{ base: "block", md: "none" }}
            p={2}
            cursor={"pointer"}
            borderRadius={6}
            _hover={{ bg: "whiteAlpha.200" }}
            w={10}
          >
            <InstagramMobileLogo />
          </Box>
        </RouterLink>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <RouterLink
                to={item.link || ""}
                style={{ textDecoration: 'none' }}
              >
                <Flex
                  alignItems={"center"}
                  gap={4}
                  _hover={{ bg: "whiteAlpha.400" }}
                  borderRadius={6}
                  p={2}
                  w={{ base: 10, md: "auto" }}
                  justifyContent={{ base: "center", md: "flex-start" }}
                >
                  {item.icon}
                  <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
                </Flex>
              </RouterLink>
            </Tooltip>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Sidebar;
