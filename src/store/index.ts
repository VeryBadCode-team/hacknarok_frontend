import { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import router from '../router';

import AuthService from '../service/auth.service';
import {
  LoginModel,
  LoginResponse,
  RegisterResponse,
  SignUpModel,
  User,
  UserInTable,
} from '../types';

export const useStore = defineStore('main', {
  state: () => ({
    users: [] as UserInTable[],
    user: {} as User,
  }),
  actions: {
    async login(payload: LoginModel): Promise<void> {
      try {
        const response: AxiosResponse<LoginResponse, any> = await AuthService.login(payload);
        this.user = response.data;
        // Save in local storage
        router.push('/authenticated');
      } catch (err) {
        console.error(err);
      }
    },
    async register(payload: SignUpModel): Promise<void> {
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
        console.error(err);
      }
    },
  },
});
