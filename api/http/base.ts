import ky from "ky";
import {useAuth0} from "@auth0/auth0-react";

export const useApiClient = (): typeof ky => {
    const {getAccessTokenSilently} = useAuth0()

    return ky.create({
        prefixUrl: process.env.NEXT_PUBLIC_API_URL,
        hooks: {
            beforeRequest: [
                async request => {
                    const token = await getAccessTokenSilently({audience: "https://geekhub-api.geekshacking.com"})
                    console.log(token)
                    request.headers.set("Authorization", `Bearer ${token}`)
                }
            ],
        },
    });
}

export default ky.create({prefixUrl: process.env.NEXT_PUBLIC_API_URL})
