import { Injectable } from '@angular/core';
import { DataInterface } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData(): DataInterface[] {
    return [
      {
        totals: [
          {
            currency: 'EUR',
            balance: 32500.2234,
            toEurRate: 1,
          },
          {
            currency: 'GBP',
            balance: 88300.1842,
            toEurRate: 1.17,
          },
        ],
        account: {
          reference: 'user1@invoicefair.com',
          displayName: 'Test user 1',
        },
      },
      {
        totals: [
          {
            currency: 'EUR',
            balance: 54403.7169,
            toEurRate: 1,
          },
          {
            currency: 'USD',
            balance: 120.1533,
            toEurRate: 0.89,
          },
        ],
        account: {
          reference: 'user2@invoicefair.com',
          displayName: 'Test user 2',
        },
      },
    ];
  }
}
