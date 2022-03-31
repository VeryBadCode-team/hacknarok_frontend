import { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import router from '@/router';

import AuthService from '@/service/auth.service';
import {
  LoginModel,
  LoginResponse,
  RegisterResponse,
  SignUpModelPayload,
  UpdateUserPayload,
  User,
} from '@/types';

export const useAuth = defineStore('auth', {
  state: () => ({
    user: {} as User,
  }),
  actions: {
    async login(payload: LoginModel): Promise<void> {
      try {
        const response: AxiosResponse<LoginResponse, any> =
          await AuthService.login(payload);
        this.user = response.data;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        router.push('/authenticated');
      } catch (err) {
        // TODO - toast here
        // msg: Invalid credentials. Please try again.
      }
    },
    async register(payload: SignUpModelPayload): Promise<void> {
      try {
        const response: AxiosResponse<RegisterResponse, any> =
          await AuthService.register(payload);
        if (response.data.id) {
          const newPayload: LoginModel = {
            email: payload.email,
            password: payload.password,
          };
          this.login(newPayload);
        }
      } catch (err) {
        // TODO - toast here
      }
    },
    async changeEmail(payload: UpdateUserPayload): Promise<void> {
      try {
        await AuthService.changeEmail(payload, this.user.token.type);
        // TODO - toast here
      } catch (err) {
        // TODO - toast here
      }
    },
    async changePassword(payload: UpdateUserPayload): Promise<void> {
      try {
        await AuthService.changePassword(payload, this.user.token.type);
        // TODO - toast here
      } catch (err) {
        // TODO - toast here
      }
    },
    logout(): void {
      (this.user = {} as User), router.push('/');
      localStorage.removeItem('currentUser');
    },
  },
});
