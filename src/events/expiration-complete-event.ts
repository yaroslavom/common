import { Subjects } from './subjects';

export interface ExpirationCompleteEvent {
    expiration: Subjects.ExpirationComplete;
    data: {
        orderId: string;
    };
};