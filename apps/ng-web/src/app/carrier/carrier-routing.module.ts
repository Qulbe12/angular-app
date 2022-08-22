import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarrierProfileComponent} from "./carrier-profile/carrier-profile.component";

const routes: Routes = [
  {
    path: "setup-carrier-profile",
    component: CarrierProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrierRoutingModule { }
