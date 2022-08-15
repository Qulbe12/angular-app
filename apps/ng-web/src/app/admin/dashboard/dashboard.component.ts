import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'x-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  clickValue : boolean = false

  onClick(){
    this.clickValue = !this.clickValue
  }

  clickedOutside(){
    this.clickValue = false
  }
}
