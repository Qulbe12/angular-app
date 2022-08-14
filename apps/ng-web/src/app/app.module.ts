import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AccountModule } from './account/account.module';
import {AdminModule} from "./admin/admin.module";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    AccountModule,
    AdminModule, HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
