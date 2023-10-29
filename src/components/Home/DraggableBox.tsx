import { Box, Icon, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useGesture } from "react-use-gesture";
import { MdRecycling } from "react-icons/md";

const DraggableBox = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      setPosition({ x, y });
    },
  });

  return (
    <Box
      {...bind()}
      w="300px"
      h="100px"
      bg="#D4E3BC"
      borderRadius="md"
      position="absolute"
      cursor="grab"
      fontSize='2xl'
      textAlign='center'
      top={position.y}
      left={position.x}
    >
      <Text gap='20px' mt='30px'>
        <Icon as={MdRecycling} />
        Vida saudável</Text>
    </Box>

  );
};

export default DraggableBox;
