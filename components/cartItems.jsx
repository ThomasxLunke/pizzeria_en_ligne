import React from 'react'
import { Box, Text, Flex, IconButton } from '@chakra-ui/react'
import { useStoreState,useStoreActions } from 'easy-peasy';
import { CloseIcon } from '@chakra-ui/icons'

const CartItems = () => {

    const cart = useStoreState((state) => state.cart)
    const updateCart = useStoreActions((store) => store.changeCart)

    const updatePrice = useStoreActions((store) => store.changeTotalPrice)
    const totalPrice = useStoreState((state) => state.totalPrice)

    const handleDelete = (id,price) => {
        //update Cart
        console.log("yo")
        let cartCopy = [...cart]
        let res = cartCopy.filter((item) => {
            return item.id !== id
        })
        updateCart(res)
        //update total price
        let calc = totalPrice - price
        let newTotal = calc.toFixed(2)
        updatePrice(newTotal)
        console.log(totalPrice)
    }

    return (
        <Box>
            {
                cart.map((item) => (
                    <Flex align="flex-start" marginLeft="25px" fontWeight="bold" key={item.id} paddingBottom="20px" >
                        <Text flexBasis="60%" fontSize="large">{item.nameProduct}</Text>
                        <Text paddingRight="20px" fontSize="medium">{item.price} €</Text>
                        <IconButton size="xs" icon={<CloseIcon boxSize={4} height="100%" color="gray.300" />}  onClick={() => handleDelete(item.id,item.price)} />
                    </Flex>
                ))
            }
        </Box>
    )
}

export default CartItems
