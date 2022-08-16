import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FoundationModule} from "../foundation/foundation.module";
import {ClickOutsideDirective} from "./dashboard/clickOutside.directive";
import {LayoutModule} from "../layout/layout.module";

@NgModule({
  declarations: [DashboardComponent , ClickOutsideDirective],
  imports: [CommonModule, AdminRoutingModule, FoundationModule, LayoutModule],
})
export class AdminModule {}
