import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListViewComponent } from './admin-list-view/admin-list-view.component';
import {AccountModule} from "../account/account.module";
import {AdminService} from "./service/admin.service";



@NgModule({
  declarations: [
    AdminListViewComponent
  ],
  imports: [
    CommonModule,
    AccountModule
  ],
  providers: [
    { provide: 'accountService', useClass: AdminService }
  ]
})
export class AdminModule { }
