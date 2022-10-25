import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {FoundationModule} from "../foundation/foundation.module";
import {LayoutModule} from "../layout/layout.module";
import {AccountModule} from "../account/account.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, FoundationModule, LayoutModule, AccountModule],
})
export class HomeModule {}
