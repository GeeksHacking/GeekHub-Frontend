import {createContext, useContext} from "react";

const TokenContext = createContext<{ token: Nullable<string> }>({
    token: null
})

export const useToken = () => {
    const context = useContext(TokenContext)
    return context.token || ""
}

export default TokenContext
