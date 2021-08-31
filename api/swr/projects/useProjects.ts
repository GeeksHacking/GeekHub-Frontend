import useSWR, { SWRResponse } from "swr";

import { fetcher } from "../fetcher";
import Project from "../../../models/project";

export default function useProjects(): SWRResponse<Project[], Error> {
    return useSWR<Project[]>("Projects", fetcher);
}
