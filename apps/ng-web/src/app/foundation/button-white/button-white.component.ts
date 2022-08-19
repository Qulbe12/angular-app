import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlBaseComponent, generateValueAccessor} from "../constrol.base";

@Component({
  selector: 'x-button-white',
  templateUrl: './button-white.component.html',
  styleUrls: ['./button-white.component.css'],
  providers:[generateValueAccessor(ButtonWhiteComponent)]
})
export class ButtonWhiteComponent extends ControlBaseComponent<boolean> {
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
