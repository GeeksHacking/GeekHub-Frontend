import useSWR, {SWRResponse} from "swr";

import useTicketsApi from "../../http/tickets";

export default function useTicketStatuses(projectId: string): SWRResponse<ServerData<string[]>, Error> {
    const {statuses} = useTicketsApi(projectId);

    return useSWR(`projects/${projectId}/tickets/statuses`, statuses);
}
