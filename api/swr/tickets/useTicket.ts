import useSWR, {SWRResponse} from "swr";

import useFetcher from "../fetcher";
import Ticket from "../../../models/ticket";

export default function useTicket(projectId: string, ticketId: string): SWRResponse<Ticket, Error> {
    const fetcher = useFetcher()
    return useSWR<Ticket>(`Projects/${projectId}/Tickets/${ticketId}`, fetcher);
}
