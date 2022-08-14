import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent, generateValueAccessor} from "../base.class";

@Component({
  template: ''
})
export class InputComponent<T> extends BaseComponent<T>{
  @Input()
  placeholder = ""

  @Input()
  type = "text"

  @Input()
  label = "Input Label"
}
