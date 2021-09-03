import Ticket from "../../models/ticket";
import apiClient from "./base";
import CreateTicketRequest from "../dtos/tickets";
import {Operation} from "fast-json-patch"
import {useToken} from "../../components/app/TokenContext";

export interface TicketsApi {
    create: (ticket: CreateTicketRequest) => Promise<ServerData<Ticket>>;
    update: (id: string, ticket: Operation[]) => Promise<ServerData<Ticket>>;
    types: () => Promise<ServerData<string[]>>;
    statuses: () => Promise<ServerData<string[]>>;
}

export default function useTicketsApi(projectId: string): TicketsApi {
    const token = useToken()

    return {
        create: async (ticket) => {
            return await apiClient.post(`projects/${projectId}/tickets`, {
                json: ticket,
                headers: {Authorization: `Bearer ${token}`}
            }).json();
        },
        update: async (id, ticket) => {
            return await apiClient.patch(`projects/${projectId}/tickets/${id}`, {
                json: ticket,
                headers: {Authorization: `Bearer ${token}`}
            }).json();
        },
        types: async () => {
            return await apiClient.get(`projects/${projectId}/tickets/types`, {headers: {Authorization: `Bearer ${token}`}}).json();
        },
        statuses: async () => {
            return await apiClient.get(`projects/${projectId}/tickets/statuses`, {headers: {Authorization: `Bearer ${token}`}}).json();
        }
    };
}
