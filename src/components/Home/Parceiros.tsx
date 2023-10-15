import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";

interface Props {
  alt: string;
}

export default function Parceiros() {
  return (
    <>
      <Box px={4}>
        <SimpleGrid justifyItems='center' columns={{ base: 1, md: 5 }} spacing={5}>
          <Box >
            <Image src='logo-ecogreen.png' alt='asasas' />
          </Box>

          <Box>
            <Image src='logo-eco.png' w='110px' mt='26px' alt='asasas' />
          </Box>

          <Box>
            <Image src='logo-ecogreen.png' alt='asasas' />
          </Box>

          <Box>
            <Image src='logo-ecogreen.png' alt='asasas' />
          </Box>

          <Box>
            <Image src='logo-ecogreen.png' alt='asasas' />
          </Box>

        </SimpleGrid>
      </Box>
    </>
  )
}