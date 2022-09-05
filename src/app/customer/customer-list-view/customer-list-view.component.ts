import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-customer-list-view',
  templateUrl: './customer-list-view.component.html',
  styleUrls: ['./customer-list-view.component.css'],
  providers: [
    { provide: 'accountService', useClass: CustomerService }
  ]
})
export class CustomerListViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
