import useSWR, {SWRResponse} from "swr";

import useFetcher from "../fetcher";
import Project from "../../../models/project";

export default function useProjects(): SWRResponse<ServerData<Project[]>, Error> {
    const fetcher = useFetcher()

    return useSWR<ServerData<Project[]>>("projects", fetcher);
}
