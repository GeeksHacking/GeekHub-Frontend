export default interface CreateTicketRequest {
    name: string;
    description?: string;
    type?: string;
    status?: string;
    reporterId?: string;
    assigneeId?: string;
    parentTicketId?: number;
}
