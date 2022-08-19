import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'x-page-center',
  templateUrl: './page-center.component.html',
  styleUrls: ['./page-center.component.css'],
})
export class PageCenterComponent implements OnInit {

  @Input()
  title : string | null = null

  @Input()
  help:string | null = null

  constructor() {}

  ngOnInit(): void {}
}
