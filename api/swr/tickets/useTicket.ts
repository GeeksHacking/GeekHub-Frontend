import useSWR, {SWRResponse} from "swr";

import useFetcher from "../fetcher";
import Ticket from "../../../models/ticket";

export default function useTicket(projectId: string, ticketId: string): SWRResponse<ServerData<Ticket>, Error> {
    const fetcher = useFetcher()
    return useSWR<ServerData<Ticket>>(`projects/${projectId}/tickets/${ticketId}`, fetcher);
}
