export interface SignUpModelType {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  password: string;
  reenteredPassword: string;
}

export interface LoginModelType {
  email: string;
  password: string;
}
