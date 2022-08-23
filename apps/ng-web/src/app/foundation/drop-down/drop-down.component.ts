import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent  {
  @Input()
  placeholder=""
}
