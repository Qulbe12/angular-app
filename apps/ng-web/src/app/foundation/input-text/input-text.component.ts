import { Component, OnInit } from '@angular/core';
import {InputComponent} from "../input/input.component";
import {generateValueAccessor} from "../constrol.base";

@Component({
  selector: 'x-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['../input/input.component.css'],
  providers:[generateValueAccessor(InputTextComponent)]
})
export class InputTextComponent extends  InputComponent<string>{

}
