import {Account} from "../domain/Account";
import {Observable} from "rxjs";

export interface AccountService {
  getListOfAccounts(): Observable<Account[]>
}
