export enum Types {
    USERNAME = 'username',
    EMAIL = 'email',
    PHONE = 'phone',
    BILLING = 'pilling',
    PLAN = 'plan',
    ADD_ONS = 'add_ons'
}


export type billing =  'monthly' | 'yearly';

export type plan = {
        planName: string,
        planPrice: string
};

export type add_ons = {
    add_onsName: string, 
    add_onsPrice: string
}