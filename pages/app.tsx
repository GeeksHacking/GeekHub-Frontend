import * as React from "react";
import {useEffect, useState} from "react";
import type {NextPage} from "next";

import {useAuth0} from "@auth0/auth0-react";

import TokenContext from "../components/app/TokenContext"
import AppNavBar from "../components/app/AppNavBar";

const App: NextPage = () => {
    const {getAccessTokenSilently} = useAuth0()
    const [token, setToken] = useState<Nullable<string>>(null)

    useEffect(() => {
        (async () => {
            try {
                const token = await getAccessTokenSilently()
                console.log(token)
                setToken(token)
            } catch {
            }
        })()
    }, [getAccessTokenSilently])

    return (
        <TokenContext.Provider value={{token}}>
            {token && (
                <AppNavBar/>
            )}
        </TokenContext.Provider>
    )
}

export default App
