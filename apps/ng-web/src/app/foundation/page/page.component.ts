import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'x-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {

  @Input()
  heading = 'Page'

  constructor() {}

  ngOnInit(): void {}
}
