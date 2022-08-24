import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'x-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {

  submit(){
    console.log("clicked")
  }

}
