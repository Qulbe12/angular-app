import { Component, OnInit } from '@angular/core';
import {InputComponent} from "../input/input.component";
import {generateValueAccessor} from "../constrol.base";

@Component({
  selector: 'x-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['../input/input.component.css'],
  providers:[generateValueAccessor(InputPasswordComponent)]
})
export class InputPasswordComponent extends InputComponent<string> implements  OnInit{



  toggleType(){
    this.type = this.type === 'password' ? 'text' : 'password';
  }

  ngOnInit(): void {
    this.type = 'password'
  }

}
