import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import CheckoutHeader from '@/components/checkoutHeader'
import CheckoutForm from '@/components/checkoutForm'
import CheckoutCart from '@/components/checkoutCart'

const Checkout = () => {
  return (
    <Box>
      <Box width="calc(100% - 30%)" borderBottom="solid 1px" borderColor="gray.200" boxShadow='base' >
        <Center height="65px">
          <Box height="100%" width="100%">
            <CheckoutHeader />
          </Box>
        </Center>
      </Box>
      <Box width="70%">
        <Box w="100%" height="100%">
          <CheckoutForm />
        </Box>

      </Box>
      <Box bg="white" width="30%" top="0" right="0" height="100%" position="fixed" border="solid 1px" borderColor="gray.200" boxShadow='base'>
        <Box w="100%" height="100%" >
          <CheckoutCart />
        </Box>
      </Box>
    </Box>
  )
}

export default Checkout
