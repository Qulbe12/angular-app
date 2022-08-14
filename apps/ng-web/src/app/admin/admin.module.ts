import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FoundationModule} from "../foundation/foundation.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AdminRoutingModule, FoundationModule],
})
export class AdminModule {}
