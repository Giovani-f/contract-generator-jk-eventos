export interface Customer {
  name: string;
  cpf: string;
  rg: string;
  address: string;
  zipcode: string;
  city: string;
}

export interface EventData {
  date: Date
}

export interface Data {
  customer: Customer
  event: EventData
}