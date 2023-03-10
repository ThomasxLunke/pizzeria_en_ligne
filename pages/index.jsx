import React, {useState} from 'react'
import { Box, Button, Center, Flex, Divider, Text, Stack, Image } from '@chakra-ui/react'
import Link from 'next/link'
import Header from '@/components/header'
import { useRouter } from 'next/router'
import AdressBoxLayout from '@/components/adressBoxLayout'
import { parseCookies } from '@/lib/parseCookies'
import { useStoreActions,useStoreState } from 'easy-peasy'


const Home = () => {

  const router = useRouter()

  return (
    <Box>
      <Box width="calc(100%)" borderBottom="solid 1px" borderColor="gray.200" boxShadow='base'>
        <Center height="65px">
          <Box width="1050px" maxWidth="1050px" height="100%">
            <Header adress={false} />
          </Box>
        </Center>
      </Box>
      <Box>
        <Box height="450px">
          <Image boxSize="100%" src="https://www.pizzahut.fr/order/images/backgrounds/fr/fr-FR/home-bg-md.6c23733672926da73d2f33fd12f84b80.jpg" objectFit="none" objectPosition="50% 5%" />
        </Box>
      </Box>

      <AdressBoxLayout />

      <Box>
        <Stack direction='row' h='100px' p={4} mt="10px">
          <Flex width="100%" align="center" justify="center">
            <Divider orientation='horizontal' borderColor="black" />
            <Box>
              <Text width="400px" fontSize="2xl" textAlign="center" fontWeight="bold" >Nos Offres Les Plus Populaires</Text>
            </Box>
            <Divider orientation='horizontal' borderColor="black" />
          </Flex>
        </Stack>
      </Box>

      <Box mb="40px">
        <Flex gap="10px" justify="center">
          <Box maxH="360px" maxW="525px">
            <Image src="https://api.pizzahut.io/v1/content/fr-fr/fr-1/images/promo/my-box.c68d34dd411ea45e523f10003908b892.1.jpg" />
          </Box>
          <Box maxH="360px" maxW="525px">
            <Image src="https://api.pizzahut.io/v1/content/fr-fr/fr-1/images/promo/mega-menu.f581c803badf1097a74ca6ce4714a21f.1.jpg" />
          </Box>
        </Flex>
        <Center marginTop="20px">
          <Button fontSize="2xl" height="60px" colorScheme="whatsapp" maxW="1060px" width="1060px" onClick={() => router.push('/order/menupromo')}>
            Voir toutes les offres et menus
          </Button>
        </Center>
      </Box>

      <Box bg="black" height="350px" color="white" fontSize="9xl">
        Footer
      </Box>

    </Box>

  )
}


export default Home
