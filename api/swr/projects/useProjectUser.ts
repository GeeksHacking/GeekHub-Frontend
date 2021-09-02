import useSWR, {SWRResponse} from "swr";

import useFetcher from "../fetcher";
import User from "../../../models/user";

export default function useProjectUser(projectId: string, userId?: string): SWRResponse<User, Error> {
    const fetcher = useFetcher()

    return useSWR<User>(`Projects/${projectId}/Users/${userId}`, userId ? fetcher : null);
}
