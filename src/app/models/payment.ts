export interface Payment{

    id?:number;

    bookingId:number;

    amount:number;

    paymentMethod:string;

    paymentDate:string;

    status:string;

}