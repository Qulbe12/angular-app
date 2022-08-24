import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierProfileComponent } from './carrier-profile/carrier-profile.component';
import { AbstractCarrierService } from '../../../../../libs/ng-services/src/carrier/carrier.interface';
import { CarrierMockService } from '../../../../../libs/ng-services/src/carrier/carrier.mock-service';
import { FoundationModule } from '../foundation/foundation.module';
import { FormsModule } from '@angular/forms';
import { CarrierService } from '@trucks/ng-services';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { AddTruckComponent } from './add-truck/add-truck.component';

@NgModule({
  declarations: [
    CarrierProfileComponent,
    VehicleRegistrationComponent,
    AddTruckComponent,
  ],
  imports: [CommonModule, CarrierRoutingModule, FoundationModule, FormsModule],
  providers: [{ provide: AbstractCarrierService, useClass: CarrierService }],
  exports: [VehicleRegistrationComponent, AddTruckComponent ],
})
export class CarrierModule {}
