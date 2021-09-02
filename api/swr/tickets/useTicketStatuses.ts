import useSWR, {SWRResponse} from "swr";

import useTicketsApi from "../../http/tickets";

export default function useTicketStatuses(projectId: string): SWRResponse<string[], Error> {
    const {statuses} = useTicketsApi(projectId);

    return useSWR(`Projects/${projectId}/Tickets/Statuses`, statuses);
}
