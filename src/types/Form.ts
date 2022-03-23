export interface SignupModelType {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  reenteredPassword: string | null;
}

export interface LoginModelType {
  email: string
  password: string
}
