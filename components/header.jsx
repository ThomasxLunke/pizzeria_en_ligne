import React from 'react'
import { Box, Center, Flex, Divider, Text } from "@chakra-ui/react"
import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineClock } from "react-icons/hi";
import NextImage from 'next/image'
import { useStoreState } from 'easy-peasy';

const Header = ({ adress }) => {

    const zipCode = useStoreState((state) => state.zipCode)
    const city = useStoreState((state) => state.city)
    const district = useStoreState((state) => state.district)

    const takeAwayOrDelivery = useStoreState((state) => state.takeAwayOrDelivery)
    
    return (
        <Box width="100%" height="100%">
            <Center height="100%">
                <Flex justify="space-between" width="100%">
                    <Box basis="30%">
                        <Link href="/">
                            <NextImage src="/logo-pizzeria.jpg" alt="logo-pizzeria" height={40} width={143} />
                        </Link>
                    </Box>

                    {adress &&
                        <Flex align="center" basis="70%" justify="flex-end">
                            <IoLocationSharp />
                            <Text textDecoration="underline">Commande {takeAwayOrDelivery==="0" ? "livraison" : "emporter"} {takeAwayOrDelivery==="0" ? "dans le " + zipCode : "de "+city + " " + district}</Text>
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
