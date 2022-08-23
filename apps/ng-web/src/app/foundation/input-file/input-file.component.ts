import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'x-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css'],
})
export class InputFileComponent  {

  @Input()
  placeholder = ""

}
