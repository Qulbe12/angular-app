import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierProfileComponent } from './carrier-profile/carrier-profile.component';
import {AbstractCarrierService} from "../../../../../libs/ng-services/src/carrier/carrier.interface";
import {AccountMockService} from "../../../../../libs/ng-services/src/carrier/carrier.mock-service";
import {FoundationModule} from "../foundation/foundation.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [CarrierProfileComponent],
  imports: [CommonModule, CarrierRoutingModule, FoundationModule, FormsModule],
  providers:[{ provide: AbstractCarrierService, useClass: AccountMockService }]
})
export class CarrierModule {}
