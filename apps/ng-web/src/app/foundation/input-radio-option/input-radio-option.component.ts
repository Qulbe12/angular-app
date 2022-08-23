import {Component, Input, OnInit} from '@angular/core';
import {NgBaseComponent} from "../ng.base";
import {ControlBaseComponent} from "../constrol.base";

@Component({
  selector: 'x-input-radio-option',
  templateUrl: './input-radio-option.component.html',
  styleUrls: ['./input-radio-option.component.css'],
})
export class InputRadioOptionComponent extends ControlBaseComponent<string>{

  @Input()
  options=[{
    title: "Option 1",
    value: 'Option 1',
  },{
    title: "Option 2",
    value: 'Option 2',
  }]

  @Input()
  label=""

  @Input()
  errors: string[] | null = null;

  select(val: string){
    console.log(val)
    this.value = val;
  }
}
