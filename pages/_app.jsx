import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import PizzeriaLayout from '@/components/pizzeriaLayout'
import { Box } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { StoreProvider } from 'easy-peasy'
import { store } from '../lib/store'
import "./../styles/style.css"


const MyApp = ({ Component, pageProps }) => {

    const theme = extendTheme({
        styles: {
            global: {
                body: {
                    overflowY: 'scroll'
                },
                _disabled: {
                    color: 'black'
                }
            }
        }
    })

    return (
        <ChakraProvider theme={theme}>
            <StoreProvider store={store}>
                <Component {...pageProps} />
            </StoreProvider>
        </ChakraProvider>
    )
}

export default MyApp
