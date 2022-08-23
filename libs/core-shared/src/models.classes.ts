import {
  IS_NOT_EMPTY,
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginModel {
  @IsNotEmpty()
  @IsEmail()
  email = '';

  @IsNotEmpty()
  @MinLength(6)
  password = '';

  rememberMe = false;
}

export class ForgetPasswordModel {
  @IsNotEmpty()
  @IsEmail()
  email = '';
}

export class ResetPasswordModel {
  @IsNotEmpty()
  @MinLength(6)
  password = '';
  @IsNotEmpty()
  otp = '';

  @IsNotEmpty()
  @IsEmail()
  email = '';
}

export class RegisterModel {
  @IsNotEmpty()
  name = '';

  @IsNotEmpty()
  @IsEmail()
  email = '';

  password = '';

  // @ApiProperty()
  terms = false;
}

export class Roles {
  carrier = '';
  broker = '';
}

export class SelectRoleModel {
  @IsNotEmpty()
  role = '';
}

export class CarrierProfileModel {
  @IsNotEmpty()
  licenseType = '';
  @IsNotEmpty()
  licenseNo = '';
  stateOperational = '';
  @IsNotEmpty()
  companyName = '';
  @IsNotEmpty()
  title = '';
  @IsNotEmpty()
  paymentOption = '';
  @IsNotEmpty()
  address = '';
  @IsNotEmpty()
  @IsEmail()
  email = '';
  @IsNotEmpty()
  cellNo = '';
  @IsNotEmpty()
  workNo = '';
  @IsNotEmpty()
  insuranceCertFile = '';
  @IsNotEmpty()
  insuranceAgent = '';
  @IsNotEmpty()
  licenseLetterFile = '';
  @IsNotEmpty()
  drivingLicFrontFile = '';
  @IsNotEmpty()
  drivingLicBackFile = '';
  @IsNotEmpty()
  w9FormFile = '';
}

export class vehicleRegistration {
  @IsNotEmpty()
  vehicleType = '';
  @IsNotEmpty()
  sleeper = '';
  @IsNotEmpty()
  daycab = '';
  @IsNotEmpty()
  year = '';
  @IsNotEmpty()
  vin = '';
  @IsNotEmpty()
  truckType = '';
  @IsNotEmpty()
  trailerType = '';
}
