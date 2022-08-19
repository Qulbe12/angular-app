import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'x-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.css'],
})
export class TestTwoComponent implements OnInit {
  constructor(private route:ActivatedRoute) {}

  model = new ResetPasswordModel

  ngOnInit(): void {

    this.route.params.subscribe(params => {
        const email = params['email']
      console.log(params)
        this.model.email = email
    });

  }
}

class ResetPasswordModel {
  email = ''
  otp = ''
  password = ''
}
