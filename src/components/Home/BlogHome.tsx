import { AspectRatio, Box } from "@chakra-ui/react";

export default function BlogHome() {
  return (

    <Box py={8} mt='50px'>
      <Box maxW='350px'>
        <AspectRatio >
          <iframe
            title='naruto'
            src='https://www.youtube.com/embed/kj8V9PFsvrw?si=eDXypHuAHjMiakZ8'
            style={{ borderRadius: '20px', height: '200px' }}
          />
        </AspectRatio>
      </Box>
    </Box>

  )
}


