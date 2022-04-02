import { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import router from '@/router';

import AuthService from '@/service/auth/auth.service';
import {
  LoginModel,
  LoginResponse,
  RegisterResponse,
  SignUpModelPayload,
  UpdateUserPayload,
  User,
} from '@/types';
import { ToastType } from '@/types';
import { toastNotification } from '@/helpers';

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
        toastNotification(
          ToastType.ERROR,
          'Invalid credentials. Please try again.',
        );
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
        toastNotification(ToastType.ERROR, 'Something is wrong');
      }
    },
    async changeEmail(payload: UpdateUserPayload): Promise<void> {
      try {
        await AuthService.changeEmail(payload);
        toastNotification(ToastType.SUCCESS, 'Email changed succesfully.');
      } catch (err) {
        toastNotification(ToastType.ERROR, 'Email cannot be changed');
      }
    },
    async changePassword(payload: UpdateUserPayload): Promise<void> {
      try {
        await AuthService.changePassword(payload);
        toastNotification(ToastType.SUCCESS, 'Password changed succesfully.');
      } catch (err) {
        toastNotification(ToastType.ERROR, 'Password cannot be changed');
      }
    },
    logout(): void {
      (this.user = {} as User), router.push('/');
      localStorage.removeItem('currentUser');
    },
  },
});
