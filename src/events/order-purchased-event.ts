import { Subjects } from './types/subjects';

export interface OrderPurchasedEvent {
    subject: Subjects.OrderPurchased;
    data: {
        orderId: string;
        ticketId: string;
    };
}
