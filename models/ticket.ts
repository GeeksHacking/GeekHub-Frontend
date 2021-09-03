export default interface Ticket {
    id: string;
    name: string;
    description: string;
    type: string;
    status: string;
    reporterId?: string;
    assigneeId?: string;
    parentTicketId?: string;
};
