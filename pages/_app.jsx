import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { StoreProvider } from 'easy-peasy'
// eslint-disable-next-line import/extensions
import { store } from '../lib/store'
import { CookiesProvider } from 'react-cookie'
import "./../styles/style.css"
import 'mapbox-gl/dist/mapbox-gl.css';


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
            <CookiesProvider>
                <StoreProvider store={store}>
                    <Component {...pageProps} />
                </StoreProvider>
            </CookiesProvider>
        </ChakraProvider>
    )
}

export default MyApp
