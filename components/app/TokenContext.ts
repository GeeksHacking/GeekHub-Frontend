import {createContext, useContext} from "react";

const TokenContext = createContext<{ token: Nullable<string> }>({
    token: null
})

export const useToken = () => {
    const context = useContext(TokenContext)
    console.log(context.token)
    return context.token || ""
}

export default TokenContext
