import { Component, OnInit } from '@angular/core';
import {ControlBaseComponent , generateValueAccessor} from "../constrol.base";

@Component({
  selector: 'x-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers:[generateValueAccessor(SwitchComponent)]
})
export class SwitchComponent extends ControlBaseComponent<boolean>{



  onSubmit(){
    this.value = !this.value
  }
}
