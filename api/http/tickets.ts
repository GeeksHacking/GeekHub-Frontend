import Ticket from "../../models/ticket";
import apiClient from "./base";
import CreateTicketRequest from "../dtos/tickets";
import {Operation} from "fast-json-patch"
import {useToken} from "../../components/app/TokenContext";

export interface TicketsApi {
    create: (ticket: CreateTicketRequest) => Promise<Ticket>;
    update: (id: string, ticket: Operation[]) => Promise<Ticket>;
    types: () => Promise<string[]>;
    statuses: () => Promise<string[]>;
}

export default function useTicketsApi(projectId: string): TicketsApi {
    const token = useToken()

    return {
        create: async (ticket) => {
            return await apiClient.post(`Projects/${projectId}/Tickets`, {
                json: ticket,
                headers: {Authorization: `Bearer ${token}`}
            }).json<Ticket>();
        },
        update: async (id, ticket) => {
            return await apiClient.patch(`Projects/${projectId}/Tickets/${id}`, {
                json: ticket,
                headers: {Authorization: `Bearer ${token}`}
            }).json<Ticket>();
        },
        types: async () => {
            return await apiClient.get(`Projects/${projectId}/Tickets/Types`, {headers: {Authorization: `Bearer ${token}`}}).json<string[]>();
        },
        statuses: async () => {
            return await apiClient.get(`Projects/${projectId}/Tickets/Statuses`, {headers: {Authorization: `Bearer ${token}`}}).json<string[]>();
        }
    };
}
