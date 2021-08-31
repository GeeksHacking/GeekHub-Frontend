import type {AppProps} from 'next/app'

import {ChakraProvider} from "@chakra-ui/react"
import {UserProvider} from '@auth0/nextjs-auth0';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </ChakraProvider>
    )
}

export default MyApp
