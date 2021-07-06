import { Subjects } from './types/subjects';
import { OrderStatus } from './types/order-status';

export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        version: number;
        status: OrderStatus; //! YAGNI
        userId: string;
        expiresAt: any;
        ticket: {
            id: string;
            price: number;
        };
    };
}
