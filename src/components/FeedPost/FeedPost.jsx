import { Box, Image } from '@chakra-ui/react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

function FeedPost() {
  return (
    <>
    
    <PostHeader/>
    <Box>
        <Image src="/img1.png" alt="img" />
    </Box>
    <PostFooter/>
    </>
  )
}

export default FeedPost