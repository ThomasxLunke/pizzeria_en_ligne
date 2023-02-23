import { useState } from 'react'
import { Box, Center } from '@chakra-ui/react'
import Navbar from './navbar'
import CardProductsMenu from './cardProductsMenu'
import CardNormalProducts from './cardNormalProducts'
import Cart from './cart'
import Header from './header'
import { useRouter } from 'next/router'


const PizzeriaLayout = ({ children, productsByType, productType, isLoading }) => {
    const router = useRouter()

    return (
        <Box height="100%">
            <Box width="calc(100% - 350px)" borderBottom="solid 1px" borderColor="gray.200" boxShadow='base' >
                <Center height="65px">
                    <Box width="100%" maxWidth="1050px" height="100%">
                        <Header adress={true} />
                    </Box>
                </Center>
            </Box>

            <Box width="calc(100% - 350px)" borderBottom="solid 1px" borderColor="gray.200" boxShadow='base'  >
                <Center height="70px">
                    <Box width="100%" maxWidth="1050px" height="100%" >
                        <Navbar activeRoute={router.query.productType}/>
                    </Box>
                </Center>
            </Box>

            <Box width="calc(100% - 350px)" height="100%" minHeight="calc(100vh - 157px)" marginTop="20px"  >
                <Center height="100%">
                    <Box height="100%" maxWidth="1050px" width="100%" >
                        {
                            productType === "menupromo" ?
                                (<CardProductsMenu productsByType={productsByType} isLoading={isLoading}/>) :
                                (<CardNormalProducts productsByType={productsByType} isLoading={isLoading} />)
                        }
                    </Box>
                </Center>
            </Box>

            <Box width="350px" top="0" right="0" height="100%" position="fixed" border="solid 1px" borderColor="gray.200" boxShadow='base'>
                <Box w="100%" height="100%" >
                    <Cart />
                </Box>
            </Box>
        </Box>
    )
}

export default PizzeriaLayout
