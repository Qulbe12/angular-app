import { Component, OnInit } from '@angular/core';
import {InputComponent} from "../input/input.component";
import {generateValueAccessor} from "../base.class";

@Component({
  selector: 'x-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['../input/input.component.css'],
  providers:[generateValueAccessor(InputEmailComponent)]
})
export class InputEmailComponent extends  InputComponent<string>{

}
