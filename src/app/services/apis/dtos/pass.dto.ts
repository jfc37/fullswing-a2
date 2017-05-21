export interface PassDto {
    clipsRemaining?: number;
    cost: number;
    createdDateTime: Date;
    description: string;
    endDate: Date;
    id: number;
    note: string;
    owner: any;
    passNumber: string;
    passType: PassType;
    paymentStatus: PaymentStatus;
    startDate: Date;
    valid: boolean;
}

export type PassType
    = 'Clip'
    | 'Unlimited';

export type PaymentStatus
    = 'Paid';
