import React, { useEffect, useState } from 'react'
import { Box, Center, Flex, Divider, Text } from "@chakra-ui/react"
import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineClock } from "react-icons/hi";
import NextImage from 'next/image'

const Header = ({ adress }) => {

    const [zipCode, setZipCode] = useState("")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [takeawayOrDelivery, setTakeAwayOrDelivery] = useState("")

    useEffect(() => {
        const userInformation = window.localStorage.getItem('TH_SI_USER_INFO')
        const restaurantInformation = window.localStorage.getItem('TH_SI_RESTAURANT_INFO')
        const deliveryOrTakeAway = window.localStorage.getItem('TH_SI_TAKEAWAYORDELIVERY')

        if (userInformation !== null && deliveryOrTakeAway === "delivery") {
            const user = JSON.parse(userInformation)
            setZipCode(user.adress.zipCode)
            setTakeAwayOrDelivery("delivery")
        }

        if (restaurantInformation !== null && deliveryOrTakeAway === "takeaway") {
            const rest = JSON.parse(restaurantInformation)
            setZipCode(rest.adress.zipCode)
            setCity(rest.adress.city)
            setDistrict(rest.adress.district)
            setTakeAwayOrDelivery("takeaway")
        }
    }, [])

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
                            <Text textDecoration="underline">Commande {takeawayOrDelivery === "delivery" ? "livraison" : "emporter"} {takeawayOrDelivery === "delivery" ? "dans le " + zipCode : "de " + city + " " + district}</Text>
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
