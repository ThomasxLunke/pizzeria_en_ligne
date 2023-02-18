import React from 'react'
import { Flex, Box, Grid, GridItem, Stack, Heading, Divider, Button, Image, Text, Center } from "@chakra-ui/react"
import { useStoreState, useStoreActions } from 'easy-peasy'

const CardNormalProducts = ({ productsByType }) => {
    if (!productsByType)
        productsByType = []

    const updateCart = useStoreActions((store) => store.changeCart)
    const cart = useStoreState((state) => state.cart)

    const updatePrice = useStoreActions((store) => store.changeTotalPrice)
    const totalPrice = useStoreState((state) => state.totalPrice)

    const handleAdd = (id, nameProduct, price) => {
        //update cart
        const item = {
            id,
            nameProduct,
            price
        }
        let cartCopy = [...cart]
        cartCopy.push(item)
        updateCart(cartCopy)
        //update price
        let calc = +totalPrice + price
        let resPrice = calc.toFixed(2)
        updatePrice(+resPrice)
        console.log(totalPrice)
    }

    return (
        <Box height="100%" width="100%" >
            <Grid templateColumns='repeat(auto-fill, minmax(220px,1fr))' gap={6} >
                {
                    productsByType.map((product) => (
                        <GridItem w='100%' height="100%" key={product.id} border="solid 1px" borderColor="gray.200" boxShadow='base'>
                            <Flex flexDir="column">
                                <Box>
                                    <Image
                                        src={product.image}
                                        alt='Green double couch with wooden legs'
                                        height="auto"
                                        width="auto"
                                    />
                                </Box>

                                <Box>
                                    <Stack mt='3' spacing='3' padding="20px">
                                        <Heading size='md'>{product.name}</Heading>
                                        <Text>
                                            {product.description}
                                        </Text>
                                    </Stack>
                                </Box>
                                <Divider />
                                <Flex align="center" justify="space-between" padding="10px">
                                    <Text>{product.price} €</Text>
                                    <Button paddingX="20px" colorScheme="whatsapp" onClick={() => handleAdd(product.id, product.name, product.price)}>Ajouter</Button>
                                </Flex>
                            </Flex>
                        </GridItem>
                    ))}
            </Grid>
        </Box>
    )
}

export default CardNormalProducts
