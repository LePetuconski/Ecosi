import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from "next/link";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export default function Nav() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Flex
      textAlign='center'
      alignItems="center"
      justifyContent="space-between"
      p={4}
    >
      <Flex alignItems="center">
        <Text borderRadius="60px" bg="#F6F6F6" w="80px" p={2} mx={2} as={NextLink} href='/'>
          Início
        </Text>
        <Text borderRadius="60px" bg="#F6F6F6" w="100px" p={2} mx={2} as={NextLink} href='/'>
          Sobre nós
        </Text>
        <Text borderRadius="60px" bg="#F6F6F6" w="80px" p={2} mx={2} as={NextLink} href='/'>
          Blog
        </Text>
      </Flex>

      <Flex alignItems="center">
        <Text borderRadius="60px" bg="#F6F6F6" w="80px" p={2} as={NextLink} href='/'>
          Ecosi
        </Text>
      </Flex>

      <Flex alignItems="center">
        <Text borderRadius="60px" bg="#F6F6F6" w="200px" p={2} mx={2} as={NextLink} href='/'>
          Ações de Conservação
        </Text>
        <Text borderRadius="60px" bg="#F6F6F6" w="90px" p={2} mx={2} as={NextLink} href='/'>
          Notícias
        </Text>
        <Text borderRadius="60px" bg="#F6F6F6" w="90px" p={2} mx={2} as={NextLink} href='/'>
          Contato
        </Text>
      </Flex>
    </Flex>
  )
}


