
export class ForgetPassword {

  email = '';
}

export class ResetPassword {
  oldPassword = ''
  newPassword = '';
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
  name = '';
  password = '';
}
