import { Injectable } from '@angular/core';
import {AccountService} from "../../account/service/account.service";
import {Observable, of} from "rxjs";
import {CustomerAccount} from "../domain/CustomerAccount";

@Injectable()
export class CustomerService implements AccountService {

  constructor() { }

  getListOfAccounts(): Observable<CustomerAccount[]> {
    return of([
      {
        id: "customer-1",
        name: "Name_1"
      },
      {
        id: "customer-2",
        name: "Name_2"
      },
      {
        id: "customer-3",
        name: "Name_3"
      }
    ]);
  }
}
