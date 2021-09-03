import useSWR, {SWRResponse} from "swr";

import useFetcher from "../fetcher";
import User from "../../../models/user";

export default function useProjectUser(projectId: string, userId?: string): SWRResponse<ServerData<User>, Error> {
    const fetcher = useFetcher()

    return useSWR<ServerData<User>>(`projects/${projectId}/users/${userId}`, userId ? fetcher : null);
}
