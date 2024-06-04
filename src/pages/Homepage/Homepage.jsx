import { Box, Container, Flex } from "@chakra-ui/react"
import FeedPosts from "../../components/FeedPost/FeedPosts"

function Homepage() {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box flex={2} py={10} border={'1px solid blue'}>
          <FeedPosts/>
        </Box>
        
        <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={'300px'} border={'1px solid red'}>
          Suggested Users
        </Box>
      </Flex>
    </Container>
  )

}

export default Homepage