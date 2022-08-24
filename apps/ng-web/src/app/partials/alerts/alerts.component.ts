import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'x-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {


  constructor() { }

  @Input()
  errors:any = []
  ngOnInit(): void {


  }

}
