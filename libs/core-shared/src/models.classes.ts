import {IS_NOT_EMPTY, IsEmail, IsNotEmpty, MaxLength, MinLength} from "class-validator";

export class LoginModel {

  @IsNotEmpty()
  @IsEmail()
  email = '';

  @IsNotEmpty()
  @MinLength(6)
  password = '';

  rememberMe = false
}


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

