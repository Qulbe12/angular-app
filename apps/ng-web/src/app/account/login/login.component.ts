import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthUserDto, LoginModel} from '@trucks/core-shared';
import {Router} from '@angular/router';
import {AbstractAccountService, IAccountService} from '@trucks/ng-services';
import {NgBaseComponent} from "../../foundation/ng.base";
import {AccountMockService} from "../../../../../../libs/ng-services/src/account/account.mock-service";


@Component({
  selector: 'x-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends NgBaseComponent {

  constructor(private authService: AbstractAccountService, private router: Router) {
    super();
  }

  model = new LoginModel();

  submit() {
    this.busy = true
    this.validate(this.model, () => {
      this.authService.login(this.model).subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/dashboard']);
        }
      ).add(() => this.busy = false)
    })
  }


}


// submit() {
//   const instanceErrors  = this.errors
//     validate(this.model).then((errors)  => {
//
//      if(errors.length > 0){
//        errors.map(function(error){
//           if(!error.constraints){
//             return
//           }
//
//          for (const [key, value] of Object.entries(error.constraints) ){
//
//           instanceErrors.push(value)
//
//          }
//
//
//        })
//      }else{
//        this.authService.login(this.model).subscribe(res =>
//          console.log(res)
//        )
//      }
//     })
//
//   this.errors = instanceErrors


// }

