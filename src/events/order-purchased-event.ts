import { Subjects } from './types/subjects';
import { OrderStatus } from './types/order-status';

export interface OrderPurchasedEvent {
    subject: Subjects.OrderPurchased;
    data: {
        id: string;
        version: number;
        status: OrderStatus; //! YAGNI
        userId: string;
        expiresAt: string;
        ticket: {
            id: string;
            price: number;
            isPurchased: string; // contains the correponding orderId
        };
    };
}
