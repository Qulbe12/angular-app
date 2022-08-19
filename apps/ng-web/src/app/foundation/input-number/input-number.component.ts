import { Component, OnInit } from '@angular/core';
import {InputComponent} from "../input/input.component";
import {generateValueAccessor} from "../constrol.base";

@Component({
  selector: 'x-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['input-number.component.css'],
  providers:[generateValueAccessor(InputNumberComponent)]
})
export class InputNumberComponent extends  InputComponent<string>{

}
