import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTruckComponent } from './add-truck/add-truck.component';
import {CarrierProfileComponent} from "./carrier-profile/carrier-profile.component";
import {VehicleRegistrationComponent} from "./vehicle-registration/vehicle-registration.component";

const routes: Routes = [
  {
    path: "setup-carrier-profile",
    component: CarrierProfileComponent
  },
  {
    path: "vehicle-registration",
    component: VehicleRegistrationComponent

  },
  {
    path: "add-truck",
    component: AddTruckComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrierRoutingModule { }
