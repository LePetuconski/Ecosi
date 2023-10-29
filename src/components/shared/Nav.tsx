import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Nav() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p={4}
    >
      <Flex alignItems="center">
        <Link borderRadius="60px" bg="gray.100" w="80px" p={2} mx={2}>
          <NextLink href="/">Início</NextLink>
        </Link>
        <Link borderRadius="60px" bg="gray.100" w="100px" p={2} mx={2}>
          <NextLink href="/">Sobre nós</NextLink>
        </Link>
        <Link borderRadius="60px" bg="gray.100" w="80px" p={2} mx={2}>
          <NextLink href="/">Blog</NextLink>
        </Link>
      </Flex>

      <Flex alignItems="center">
        <Link borderRadius="60px" bg="gray.100" w="80px" p={2}>
          <NextLink href="/">Ecosi</NextLink>
        </Link>
      </Flex>

      <Flex alignItems="center">
        <Link borderRadius="60px" bg="gray.100" w="200px" p={2} mx={2}>
          <NextLink href="/">Ações de Conservação</NextLink>
        </Link>
        <Link borderRadius="60px" bg="gray.100" w="90px" p={2} mx={2}>
          <NextLink href="/">Notícias</NextLink>
        </Link>
        <Link borderRadius="60px" bg="gray.100" w="90px" p={2} mx={2}>
          <NextLink href="/">Contato</NextLink>
        </Link>
      </Flex>
    </Flex>
  )
}