import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokerRoutingModule } from './broker-routing.module';
import { BrokerProfileComponent } from './broker-profile/broker-profile.component';

@NgModule({
  declarations: [BrokerProfileComponent],
  imports: [CommonModule, BrokerRoutingModule],
  exports: [BrokerProfileComponent],
})
export class BrokerModule {}
