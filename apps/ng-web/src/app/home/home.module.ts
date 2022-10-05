import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {FoundationModule} from "../foundation/foundation.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, FoundationModule],
})
export class HomeModule {}
