import { Component, OnInit } from '@angular/core';
import {NgBaseComponent} from "../../foundation/ng.base";
import {Router} from "@angular/router";
import {AbstractCarrierService} from "../../../../../../libs/ng-services/src/carrier/carrier.interface";
import {CarrierProfileModel} from "@trucks/core-shared";

@Component({
  selector: 'x-carrier-profile',
  templateUrl: './carrier-profile.component.html',
  styleUrls: ['./carrier-profile.component.css'],
})
export class CarrierProfileComponent extends NgBaseComponent{
  constructor(private authService: AbstractCarrierService, private router: Router) {
    super();
  }

  model = new CarrierProfileModel()

  options1 = [
    {
      title: 'MC',
      value: 'MC',
    },
    {
      title: 'Dot',
      value: 'Dot',
    }
  ];

  options2 = [
    {
      title: '1.2% Daily',
      value: '1.2% Daily',
    },
    {
      title: '2.3% Weekly',
      value: 'Weekly',
    }
  ];

  submit() {
    this.busy = true


    this.validate(this.model, () =>
      //call service
      this.authService.register(this.model).subscribe(
        //success
        data => {
          localStorage.setItem('user', JSON.stringify(data));

          this.router.navigate(['/dashboard']);
        },
        //error
        ex => this.handleServerErrors(ex)
      )
        //finally
        .add(() => this.busy = false)
    )

  }
}
