import useSWR, {SWRResponse} from "swr";

import useTicketsApi from "../../http/tickets";

export default function useTicketTypes(projectId: string): SWRResponse<ServerData<string[]>, Error> {
    const {types} = useTicketsApi(projectId);

    return useSWR(`projects/${projectId}/tickets/types`, types);
}
