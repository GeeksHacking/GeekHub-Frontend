import * as React from "react"
import {ReactChild, useEffect, useState} from "react"

import Router from "next/router"
import type {AppProps} from 'next/app'

import {ChakraProvider} from "@chakra-ui/react"
import {AppState, Auth0Provider, useAuth0} from "@auth0/auth0-react";

import TokenContext from "../components/app/TokenContext"

const onRedirectCallback = async (appState: AppState) => {
    await Router.replace(appState?.returnTo || '/');
};

function AuthWrapper({children}: { children: ReactChild }) {
    const {getAccessTokenSilently} = useAuth0()
    const [token, setToken] = useState<Nullable<string>>(null)

    useEffect(() => {
        (async () => {
            try {
                const token = await getAccessTokenSilently()
                setToken(token)
            } catch (e) {
                console.error(e)
            }
        })()
    }, [getAccessTokenSilently])

    if (!token) {
        return <div>Loading...</div>
    }

    return (
        <TokenContext.Provider value={{token}}>
            {children}
        </TokenContext.Provider>
    )
}

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
                <AuthWrapper>
                    <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column"}}>
                        <Component {...pageProps} />
                    </div>
                </AuthWrapper>
            </Auth0Provider>
        </ChakraProvider>
    )
}

export default MyApp
