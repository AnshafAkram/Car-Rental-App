export interface Booking {

  id?: number;

  customerId:number;

  vehicleId:number;

  pickupDate:string;

  returnDate:string;

  total:number;

  status:string;

}