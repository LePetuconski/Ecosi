import { Text, Box, Icon, Circle, Flex } from "@chakra-ui/react";

export default function Features() {
  return (
    <Box mt='20px'>
      <Text fontSize='20px' fontWeight={700}>Como funciona</Text>
      <Text color='#A0A2A9'>Lorem ipsum</Text>
      <Box mt='30px'>
        <Circle size='40px' bg='green' opacity={0.4} mt='10px'></Circle>
      </Box>
    </Box>
  )
}