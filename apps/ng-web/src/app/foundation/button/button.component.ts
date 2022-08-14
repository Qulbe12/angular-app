import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from "../base.class";

@Component({
  selector: 'x-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent extends BaseComponent<boolean>{
}
