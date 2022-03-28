export interface SignUpModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  reenteredPassword: string;
}

export interface LoginModel {
  email: string;
  password: string;
}
