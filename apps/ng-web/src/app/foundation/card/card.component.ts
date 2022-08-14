import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'x-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  agreed = false
  email= "qulbehussain@outlook.com"
  name= "qulbe"
  placeholder = "email"
  placeholder2 = "password"
  class = ""
}
