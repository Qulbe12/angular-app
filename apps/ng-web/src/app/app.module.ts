import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AccountModule } from './account/account.module';
import {AdminModule} from "./admin/admin.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PartialsModule } from './partials/partials.module';
import {AuthTokenConfiguratorInterceptor} from "./_core/interceptors/auth-token-configurator.interceptor";
import { CarrierModule } from './carrier/carrier.module';
import { BrokerModule } from './broker/broker.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    AccountModule,
    AdminModule, HttpClientModule, PartialsModule, CarrierModule, BrokerModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthTokenConfiguratorInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
