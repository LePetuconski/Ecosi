import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons';

export default function Hero() {
  return (
    <>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 8 }}>
            <Heading
              lineHeight={1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
              >
                Juntos pela Natureza:
              </Text>
              <br />
              <Text as={'span'} color={'green.400'} fontSize='3xl'>
                Preservando um Futuro Sustentável
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Bem-vindo à Ecosy ! Estamos comprometidos em proteger e preservar o nosso precioso planeta e sua biodiversidade. Acreditamos que a conservação ambiental é uma missão de todos nós, e cada pequeno passo pode fazer a diferença.
            </Text>
            <Text color={'gray.500'}>
              #ConservaçãoAmbiental #Sustentabilidade #AçãoAmbiental
            </Text>

            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded='20px'
                size={'lg'}
                fontWeight={'normal'}
                px={6}>
                Blog
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={<AddIcon h={4} w={4} color={'gray.400'} />}>
                Sobre nós
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  //'https://etica-ambiental.com.br/wp-content/uploads/2018/07/2018-08-07-Saiba-mais-sobre-Investiga%C3%A7%C3%A3o-ambiental-780x408.jpg'
                  'https://ambplus.com.br/wp-content/uploads/2020/02/licenciamento-ambiental-laudo.png'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}