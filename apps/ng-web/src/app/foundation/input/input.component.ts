import {Component, Input, OnInit} from '@angular/core';
import {ControlBaseComponent, generateValueAccessor} from "../constrol.base";

@Component({
  template: ''
})
export class InputComponent<T> extends ControlBaseComponent<T>{
  @Input()
  placeholder = ""

  @Input()
  type = "text"

  @Input()
  label = "Input Label"

  @Input()
  description = "description"

  @Input()
  role = ""

  @Input()
  errors: string[] | null = null;
}
