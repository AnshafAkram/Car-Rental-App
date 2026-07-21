export interface User {

  id?: number;

  fullName: string;

  phone: string;

  email: string;

  nic: string;

  password: string;

  role: 'admin' | 'customer';

}