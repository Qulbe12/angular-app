import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlBaseComponent, generateValueAccessor} from "../constrol.base";

@Component({
  selector: 'x-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers:[generateValueAccessor(ButtonComponent)]
})
export class ButtonComponent extends ControlBaseComponent<boolean>{
  @Input()
  busy = false


  @Output()
  onClick = new EventEmitter<void>();

  handle(){
    if(this.busy){
      return;
    }
    this.onClick.emit();
  }
}
