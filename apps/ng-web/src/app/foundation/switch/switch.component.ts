import { Component, OnInit } from '@angular/core';
import {BaseComponent , generateValueAccessor} from "../base.class";

@Component({
  selector: 'x-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers:[generateValueAccessor(SwitchComponent)]
})
export class SwitchComponent extends BaseComponent<boolean>{



  onSubmit(){
    this.value = !this.value
  }
}
