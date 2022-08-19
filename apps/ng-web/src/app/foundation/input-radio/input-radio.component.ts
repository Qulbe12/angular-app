import {Component, Input, OnInit} from '@angular/core';
import {InputComponent} from "../input/input.component";
import {ControlBaseComponent, generateValueAccessor} from "../constrol.base";

@Component({
  selector: 'x-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css'],
  providers:[generateValueAccessor(InputRadioComponent)]

})
export class InputRadioComponent extends ControlBaseComponent<string> {
  @Input()
  options=[{
    title: "Option 1",
    value: 'Option 1',
    description: "Description 1"
  },{
    title: "Option 2",
    value: 'Option 2',
    description: "Description 2"
  }]

  @Input()
  errors: string[] | null = null;

  select(val: string){
    console.log(val)
    this.value = val;
  }
}
