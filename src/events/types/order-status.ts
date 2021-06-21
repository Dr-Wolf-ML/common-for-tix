export enum OrderStatus {
    //* When (AND):
    // (a) the order has been created
    //! AND
    // (b) the ticket it is trying to order has not been reserved yet
    Created = 'created',

    //* When (OR):
    // (a) the ticket the order is trying to reserve has already been reserved
    //! OR
    // (b) when the user has cancelled the order
    //! OR
    // (c) the order expires before payment
    Cancelled = 'cancelled',

    //* When: the order has successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    //* When (AND):
    // (a) the order successfully reserved the ticket
    //! AND
    // (b) user payment was uccessfully
    Complete = 'complete',
}
