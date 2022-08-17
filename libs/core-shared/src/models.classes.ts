import { IS_NOT_EMPTY, IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

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
  @IsNotEmpty()
  @IsEmail()
  email = '';
}

export class ResetPassword {
  @IsNotEmpty()
  @MinLength(6)
  password = '';
  @IsNotEmpty()
  @MinLength(6)
  confirmPassword = ''
}

export class RegisterModel {

  @IsNotEmpty()
  name = ''

  @IsNotEmpty()
  @IsEmail()
  email = '';


  password = '';


  // @ApiProperty()
  terms = false
}

