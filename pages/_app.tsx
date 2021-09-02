import * as React from "react"
import type {AppProps} from 'next/app'

import {ChakraProvider} from "@chakra-ui/react"
import {AppState, Auth0Provider} from "@auth0/auth0-react";

import Router from "next/router"

const onRedirectCallback = async (appState: AppState) => {
    await Router.replace(appState?.returnTo || '/');
};

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider>
            <Auth0Provider
                useRefreshTokens
                cacheLocation={"localstorage"}
                domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || ""}
                clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ""}
                redirectUri={typeof window !== 'undefined' ? window.location.origin : undefined}
                audience={"https://geekhub-api.geekshacking.com"}
                onRedirectCallback={onRedirectCallback}
            >
                <Component {...pageProps} />
            </Auth0Provider>
        </ChakraProvider>
    )
}

export default MyApp
