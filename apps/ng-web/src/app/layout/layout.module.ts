import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideBarComponent } from './aside-bar/aside-bar.component';

@NgModule({
  declarations: [AsideBarComponent],
  imports: [CommonModule],
  exports:[AsideBarComponent]
})
export class LayoutModule {}
