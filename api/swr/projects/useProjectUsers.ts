import useSWR, {SWRResponse} from "swr";

import useFetcher from "../fetcher";
import User from "../../../models/user";

export default function useProjectUsers(projectId: string): SWRResponse<User[], Error> {
    const fetcher = useFetcher()

    return useSWR<User[]>(`Projects/${projectId}/Users`, fetcher);
}
