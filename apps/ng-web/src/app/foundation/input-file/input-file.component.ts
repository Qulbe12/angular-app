import {Component, Input, OnInit} from '@angular/core';
import {NgBaseComponent} from "../ng.base";
import {ControlBaseComponent} from "../constrol.base";

@Component({
  selector: 'x-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css'],
})
export class InputFileComponent extends ControlBaseComponent<string> {

  @Input()
  placeholder = ""

}
