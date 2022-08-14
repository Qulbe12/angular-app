import {Component, OnInit} from '@angular/core';
import {InputComponent} from "../input/input.component";
import {generateValueAccessor} from "../base.class";
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'x-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['../input/input.component.css'],
  providers: [generateValueAccessor(InputCurrencyComponent)]
})
export class InputCurrencyComponent extends InputComponent<number> {

  constructor(private currencyPipe: CurrencyPipe) {
    super();
  }

  transformAmount(element: any) {
    const formatted = this.currencyPipe.transform(this.value.toString()
      .replace('pkr', '')
      .replace(',', '')
      .replace('.', ''), 'pkr', false);
    element.target.value = formatted;
  }

}
