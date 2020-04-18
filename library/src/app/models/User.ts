export class LoginUser {
  username: string;
  password: string;
}

export class RegisterUser extends LoginUser {
  email: string;
  address: string;
}
