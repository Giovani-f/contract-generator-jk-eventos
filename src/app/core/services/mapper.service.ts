import { Injectable } from '@angular/core';
import { Customer } from '@interfaces/interfaces'

@Injectable()
export class MapperService {
  constructor() { }

  customerMapper(customer: Customer) {
    return {
      name: customer.name.toUpperCase(),
      cpf: customer.cpf,
      rg: customer.rg,
      address: customer.address,
      zipcode: customer.zipcode,
      city: customer.city
    }
  }
}