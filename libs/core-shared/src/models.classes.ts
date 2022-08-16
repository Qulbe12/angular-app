import {IS_NOT_EMPTY, IsNotEmpty} from "class-validator";

export class ForgetPassword {

  email = '';
}

export class ResetPassword {
  password = '';
  confirmPassword = ''
}

export class RegisterModel {

  name = ''

  email = '';

  password = '';

  confirmPassword = '';

  terms = false
}

export class LoginModel {
  @IsNotEmpty()
  email = '';
  @IsNotEmpty()
  password = '';
}
