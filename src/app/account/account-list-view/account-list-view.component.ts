import {Component, Inject, OnInit} from '@angular/core';
import {AccountService} from "../service/account.service";
import {Observable} from "rxjs";
import {Account} from "../domain/Account";

@Component({
  selector: 'app-account-list-view',
  templateUrl: './account-list-view.component.html',
  styleUrls: ['./account-list-view.component.css']
})
export class AccountListViewComponent implements OnInit {
  accounts$: Observable<Account[]> | null = null

  constructor(@Inject("accountService") private accountService: AccountService) { }

  ngOnInit(): void {
    this.accounts$ = this.accountService.getListOfAccounts()
  }

}
