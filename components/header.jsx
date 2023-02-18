import React from 'react'
import { Box, Center, Flex, Divider, Text } from "@chakra-ui/react"
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineClock } from "react-icons/hi";
import NextImage from 'next/image'

const Header = ({ adress }) => {
    return (
        <Box width="100%" height="100%">
            <Center height="100%">
                <Flex justify="space-between" width="100%">
                    <Box basis="30%">
                        <NextImage src="/logo-pizzeria.jpg" alt="logo-pizzeria" height={40} width={143} />
                    </Box>
                    {adress &&
                        <Flex align="center" basis="70%" justify="flex-end">
                            <IoLocationSharp />
                            <Text textDecoration="underline">Commande en livraison dans le 31400</Text>
                            <Center height="40%">
                                <Divider orientation='vertical' marginX="10px" />
                            </Center>
                            <HiOutlineClock />
                            <Text textDecoration="underline">18:30 - 18:45</Text>
                        </Flex>
                    }
                </Flex>
            </Center>
        </Box>
    )
}

export default Header
