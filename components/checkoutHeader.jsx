import React from 'react'
import { Box, Flex, Center, Text, Divider,IconButton } from '@chakra-ui/react'
import {ChevronLeftIcon} from '@chakra-ui/icons'
import NextImage from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';


const CheckoutHeader = () => {
    const router = useRouter()
    return (
        <Box width="100%" height="100%">
            <Flex align="center">
                <IconButton aria-label='return' icon={<ChevronLeftIcon />} bg="white" width="30px" height="65px" onClick={() => router.push("/order/menupromo")} />
                <Center height="100%">
                    <Flex width="100%">
                        <Box>
                            <Link href="/">
                                <NextImage src="/logo-pizzeria.jpg" alt="logo-pizzeria" height={40} width={143} />
                            </Link>
                        </Box>
                    </Flex>
                </Center>
            </Flex>

        </Box>
    )
}

export default CheckoutHeader
