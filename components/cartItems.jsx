import React from 'react'
import { Box, Text, Flex, IconButton, NumberInputStepper, NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { CloseIcon } from '@chakra-ui/icons'

const CartItems = () => {

    const cart = useStoreState((state) => state.cart)
    const updateCart = useStoreActions((store) => store.changeCart)

    const updatePrice = useStoreActions((store) => store.changeTotalPrice)
    const totalPrice = useStoreState((state) => state.totalPrice)

    const handleDelete = (id, price) => {
        //update Cart
        //console.log("yo")
        let cartCopy = [...cart]
        let res = cartCopy.filter((item) => {
            return item.id !== id
        })
        updateCart(res)
        //update total price
        let calc = totalPrice - price
        let newTotal = calc.toFixed(2)
        updatePrice(newTotal)
        //console.log(totalPrice)
    }

    const handleNumberItemChange = (value, id) => {
        //update Cart and price
        let cartCopy = [...cart]
        let total = 0
        cartCopy.forEach(element => {
            if (element.id === id) {
                element.price = (+element.unitPrice * +value).toFixed(2)
            }
            //console.log(total)
            total = (+element.price + +total).toFixed(2)

        });
        updateCart(cartCopy)
        updatePrice(total)
        //console.log(cart)
    }

    const handleIncrement = (id) => {
        let cartCopy = [...cart]
        cartCopy.forEach(element => {
            if (element.id === id) {
                element.numberOfItem++
            }
        });
        updateCart(cartCopy)
    }

    const handleDecrement = (id) => {
        let cartCopy = [...cart]
        cartCopy.forEach(element => {
            if (element.id === id && element.numberOfItem != 1) {
                element.numberOfItem--
            }
        });
        updateCart(cartCopy)
    }

    return (
        <Box>
            {
                cart.map((item) => (
                    <Flex align="flex-start" fontWeight="bold" key={item.id} paddingBottom="20px" alignItems="center" gap={5} >
                        <Box width="70px" >
                            <NumberInput keepWithinRange={true} value={item.numberOfItem} defaultValue={1} min={1} max={100} size='sm' onChange={(value) => handleNumberItemChange(value, item.id)} >
                                <NumberInputField textAlign="left" />
                                <NumberInputStepper>
                                    <NumberIncrementStepper onClick={() => handleIncrement(item.id)} />
                                    <NumberDecrementStepper onClick={() => handleDecrement(item.id)} />
                                </NumberInputStepper>
                            </NumberInput>
                        </Box>
                        <Flex flexDir="column" flexBasis="60%">
                            <Text flexBasis="50%" fontSize="large">{item.nameProduct}</Text>
                            <Text fontSize="medium">{item.price} €</Text>
                        </Flex>



                        <IconButton size="xs" icon={<CloseIcon boxSize={4} height="100%" color="gray.300" />} onClick={() => handleDelete(item.id, item.price)} />
                    </Flex>
                ))
            }
        </Box>
    )
}

export default CartItems
