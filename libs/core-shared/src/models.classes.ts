import { IS_NOT_EMPTY, IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class LoginModel {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email = '';

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  password = '';

  rememberMe = false
}


export class ForgetPassword {

  @ApiProperty()
  email = '';
}

export class ResetPassword {
  @ApiProperty()
  password = '';
  @ApiProperty()
  confirmPassword = ''
}

export class RegisterModel {

  @ApiProperty()
  name = ''

  @ApiProperty()
  email = '';

  @ApiProperty()
  password = '';

  @ApiProperty()
  confirmPassword = '';

  // @ApiProperty()
  terms = false
}

