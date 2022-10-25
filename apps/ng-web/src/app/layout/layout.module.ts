import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AsideBarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [AsideBarComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {}
