import { User } from "./User";

export interface RegisterResponse {
  id: string;
}

export interface LoginResponse extends User {}
