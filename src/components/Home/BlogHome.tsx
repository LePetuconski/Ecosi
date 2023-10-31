import {Box, LinkBox, Heading, LinkOverlay, Text } from "@chakra-ui/react";

export default function BlogHome() {
  return (

    <LinkBox as='article' mt='80px' maxW='sm' p='5' borderWidth='1px' rounded='md'>
    <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
      13 days ago
    </Box>
    <Heading size='md' my='2'>
      <LinkOverlay href='#'>
        New Year, New Beginnings: Smashing Workshops & Audits
      </LinkOverlay>
    </Heading>
    <Text mb='3'>
      Catch up on what’s been cookin’ at Smashing and explore some of the most
      popular community resources.
    </Text>
    <Box as='a' color='teal.400' href='#' fontWeight='bold'>
      Some inner link
    </Box>
  </LinkBox>

  )
}

{/** <Box py={8} mt='50px'>
      <Box maxW='350px'>
        <AspectRatio >
          <iframe
            title=''
            src='https://www.youtube.com/embed/kj8V9PFsvrw?si=eDXypHuAHjMiakZ8'
            style={{ borderRadius: '20px', height: '200px' }}
          />
        </AspectRatio>
      </Box>
    </Box> */}
