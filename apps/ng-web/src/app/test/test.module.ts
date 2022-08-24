import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test/test.component';
import {FoundationModule} from "../foundation/foundation.module";

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule, FoundationModule],
  exports: [TestComponent],
})
export class TestModule {}
