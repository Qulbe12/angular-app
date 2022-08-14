import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SwitchComponent } from './switch/switch.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { PageComponent } from './page/page.component';
import { PageCenterComponent } from './page-center/page-center.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputCurrencyComponent } from './input-currency/input-currency.component';
import { BaseComponent } from './base.class';
import { TableComponent } from './table/table.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { DropDownComponent } from './drop-down/drop-down.component';

@NgModule({
  declarations: [
    SwitchComponent,
    InputComponent,
    NavbarComponent,
    ButtonComponent,
    CardComponent,
    PageComponent,
    PageCenterComponent,
    InputPasswordComponent,
    InputEmailComponent,
    InputCurrencyComponent,
    BaseComponent,
    TableComponent,
    SearchInputComponent,
    DropDownComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    SwitchComponent,
    NavbarComponent,
    ButtonComponent,
    CardComponent,
    PageComponent,
    PageCenterComponent,
    InputPasswordComponent,
    InputEmailComponent,
    InputCurrencyComponent,
    TableComponent,
    SearchInputComponent,
    DropDownComponent
  ],
  providers: [CurrencyPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FoundationModule {}
