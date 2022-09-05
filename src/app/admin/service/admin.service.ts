import { Injectable } from '@angular/core';
import {AccountService} from "../../account/service/account.service";
import {Observable, of} from "rxjs";
import {AdminAccount} from "../domain/AdminAccount";

@Injectable()
export class AdminService implements AccountService {
  constructor() { }

  getListOfAccounts(): Observable<AdminAccount[]> {
    return of([
      {
        id: "admin-id-1",
        name: "First Admin"
      },
      {
        id: "admin-id-2",
        name: "Second Admin"
      }
    ]);
  }
}
