import React, { useState } from 'react'
import { Box, Flex, Text, Switch, Divider, List, ListItem, LinkOverlay, LinkBox, Center, Image } from "@chakra-ui/react"
import Link from 'next/link'
import { useRouter } from 'next/router'


const navMenu = [
    {
        name: 'Menu & Promos',
        route: 'menupromo',
    },
    {
        name: 'Pizzas',
        route: 'pizzas',
    },
    {
        name: 'Entrées',
        route: 'entree',
    },
    {
        name: 'Sauces',
        route: 'sauces',
    },
    {
        name: 'Desserts',
        route: 'desserts',
    },
    {
        name: 'Boissons',
        route: 'boissons',
    },
    {
        name: 'Autres',
        route: 'autres',
    },

]

const Navbar = ({activeRoute}) => {

    const [activeMenu, setActiveMenu] = useState("")
    
    
    return (
        <Box width="100%" height="100%">
            <Center height="100%">
                <List spacing={2} height="100%" width="100%" >
                    <Flex height="100%" align="center" justify="space-between" width="100%" >
                        <Flex height="100%">
                            {navMenu.map((menu) => (
                                <Link
                                    key={menu.name}
                                    href={{
                                        pathname: '/order/[productType]',
                                        query: { productType: menu.route },
                                    }}
                                    passHref /* === pass "href" to the child component (here the child of NextLink) */
                                >
                                    <ListItem
                                        paddingX="20px"
                                        paddingTop="10px"
                                        key={menu.name}
                                        bg={activeRoute === menu.route ? "red.500" : "white"}
                                        height="100%"
                                        minWidth="110px"
                                        width="110px"
                                        borderRight="solid 1px"
                                        borderColor="gray.200"
                                        fontWeight="bold"
                                        boxShadow='base'

                                        _hover={{
                                            textDecoration: "underline"
                                        }}
                                        onClick={() => setActiveMenu(menu.route)}>

                                        <Center>
                                            <LinkBox >
                                                <LinkOverlay as="span">{menu.name}</LinkOverlay>
                                            </LinkBox>
                                        </Center>
                                    </ListItem>
                                </Link>
                            ))}
                        </Flex>

                        <Flex align="center">
                            <Text paddingX="10px">Végétarien</Text>
                            <Switch colorScheme="whatsapp" />
                        </Flex>
                    </Flex>
                </List>
            </Center >
        </Box >
    )
}

export default Navbar
