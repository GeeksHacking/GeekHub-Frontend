import apiClient from "../http/base";
import {useToken} from "../../components/app/TokenContext";

const useFetcher = () => {
    const token = useToken()

    return async <T>(url: string): Promise<T> => {
        return await apiClient.get(url, {headers: {Authorization: `Bearer ${token}`}}).json<T>();
    }
}

export default useFetcher
