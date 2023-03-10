import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Button, Divider } from "@chakra-ui/react"
import { AiFillPlusCircle } from "react-icons/ai";
import { useStoreState } from 'easy-peasy';
import CartItems from './cartItems';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import Cookie from "js-cookie"


const Cart = () => {
  const cart = useStoreState((state) => state.cart)
  const totalPrice = useStoreState((state) => state.totalPrice)
  const router = useRouter()
  const [numberItemCart, setNumberItemCar] = useCookies(['numberItemCart']);


  useEffect (() => {
    Cookie.set("numberItemCart", cart.length)
  }, [cart])

  return (
    <Box width="100%" height="100%">
      <Center>
        <Text textColor="black" fontSize="2xl" fontWeight="bold" paddingY="30px"> Votre panier </Text>
      </Center>
      <Flex align="center" paddingX="15px" paddingBottom="15px">
        <AiFillPlusCircle color="gray" size="20" />
        <Text textColor="gray.400" textDecoration="underline" paddingLeft="10px">Ajouter un code de réduction</Text>
      </Flex>

      <Box paddingX="15px" maxHeight="calc(100vh - 157px - 90px )" overflow="auto">

        <Box paddingY="20px" >
          {
            cart.length === 0 ?
              (<Box>
                <Text fontSize="small">Votre panier est vide. Jetez un oeil a <Text as="span" textDecoration="underline">nos promos du moment</Text> ?</Text>
              </Box>)
              :
              (<Box >
                <CartItems />
              </Box>)
          }
        </Box>
      </Box>

      <Box position="absolute" bottom="0" bg="gray.100" width="100%" paddingY="20px">
        <Flex flexDirection="column" align="center">
          {
            cart.length !== 0 &&
            <Flex marginBottom="10px" justify="space-around" width="100%" align="center">
              <Text flexBasis="30%" fontWeight="bold">{cart.length} article(s)</Text>
              <Text flexBasis="50%" fontSize="large" fontWeight="bold" align="right">Prix total: {totalPrice} €</Text>
            </Flex>
          }
          {cart.length !== 0 && <Divider />}
          <Text fontSize="medium" textColor="black" paddingBottom="10px" paddingTop="10px">Montant minimum en livraison est de 15.00 €</Text>

          <Button colorScheme="whatsapp" width="90%" onClick={() => router.push('/checkout')} isDisabled={cart.length === 0 ? true : false}>
            <Text padding="1px" fontWeight="bold">Commander</Text>
          </Button>


        </Flex>
      </Box>

    </Box>

  )
}

export default Cart
