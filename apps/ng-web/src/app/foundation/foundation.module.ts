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
import { ControlBaseComponent } from './constrol.base';
import { TableComponent } from './table/table.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { NavBarDashboardComponent } from './nav-bar-dashboard/nav-bar-dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InputCheckComponent } from './input-check/input-check.component';
import { NgBaseComponent } from './ng.base';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormComponent } from './form/form.component';
import { FormFooterComponent } from './form-footer/form-footer.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { InputImageComponent } from './input-image/input-image.component';
import { ButtonWhiteComponent } from './button-white/button-white.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputFileComponent } from './input-file/input-file.component';

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
    ControlBaseComponent,
    NgBaseComponent,
    TableComponent,
    SearchInputComponent,
    DropDownComponent,
    NavBarDashboardComponent,
    SideBarComponent,
    InputCheckComponent,
    FormHeaderComponent,
    FormComponent,
    FormFooterComponent,
    InputTextComponent,
    InputTextAreaComponent,
    InputImageComponent,
    ButtonWhiteComponent,
    InputRadioComponent,
    InputNumberComponent,
    InputFileComponent,
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
    DropDownComponent,
    NavBarDashboardComponent,
    SideBarComponent,
    InputCheckComponent,
    FormHeaderComponent,
    FormComponent,
    FormFooterComponent,
    InputTextComponent,
    InputTextAreaComponent,
    InputImageComponent,
    ButtonWhiteComponent,
    InputRadioComponent,
    InputNumberComponent,
    InputFileComponent,
  ],
  providers: [CurrencyPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FoundationModule {}
