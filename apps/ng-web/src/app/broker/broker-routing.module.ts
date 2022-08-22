import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrokerProfileComponent} from "./broker-profile/broker-profile.component";

const routes: Routes = [
  {
    path: "setup-broker-profile",
    component: BrokerProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokerRoutingModule { }
