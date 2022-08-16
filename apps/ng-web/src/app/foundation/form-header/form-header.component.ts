import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'x-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css'],
})
export class FormHeaderComponent{

  @Input()
  title = 'Form'

}
