import {Component, Input, OnInit} from '@angular/core';
import {ControlBaseComponent, generateValueAccessor} from "../constrol.base";

@Component({
  selector: 'x-input-check',
  templateUrl: './input-check.component.html',
  styleUrls: ['./input-check.component.css'],
  providers: [generateValueAccessor(InputCheckComponent)]
})
export class InputCheckComponent extends  ControlBaseComponent<boolean>{


  toggle(){
    this.value= !this.value;
  }
}
