import useSWR, {SWRResponse} from "swr";

import useFetcher from "../fetcher";
import Ticket from "../../../models/ticket";

export default function useTickets(projectId: string): SWRResponse<Ticket[], Error> {
    const fetcher = useFetcher()
    return useSWR<Ticket[]>(`Projects/${projectId}/Tickets`, fetcher);
}
