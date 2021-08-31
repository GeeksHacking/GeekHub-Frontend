import useSWR, { SWRResponse } from "swr";
import { useFetcher } from "../fetcher";
import Ticket from "../../../models/Ticket";

export default function useTickets(projectId: string): SWRResponse<Ticket[], Error> {
    return useSWR<Ticket[]>(`Projects/${projectId}/Tickets`, useFetcher);
}