import useSWR, {SWRResponse} from "swr";

import useTicketsApi from "../../http/tickets";

export default function useTicketTypes(projectId: string): SWRResponse<string[], Error> {
    const {types} = useTicketsApi(projectId);

    return useSWR(`Projects/${projectId}/Tickets/Types`, types);
}
