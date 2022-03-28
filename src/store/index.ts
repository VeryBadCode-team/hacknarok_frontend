import { defineStore } from 'pinia';
import router from '../router';

import UserService from '../service/user.service';
import { LoginModelType, SignUpModelType, User, UserInTable } from '../types';

export const useStore = defineStore('main', {
  state: () => ({
    users: [] as UserInTable[],
    user: {} as User,
  }),
  actions: {
    async getUsers(): Promise<void> {
      try {
        const response = await UserService.getUsers();
        this.users = response.data.results;
      } catch (err) {
        console.error(err);
      }
    },
    async login(payload: LoginModelType): Promise<void> {
      try {
        const response = await UserService.login(payload);
        this.user = response.data;
        router.push('/authenticated');
      } catch (err) {
        console.error(err);
      }
    },
    async register(payload: SignUpModelType): Promise<void> {
      try {
        const response = await UserService.register(payload);
        this.user = response.data;
        router.push('/authenticated');
      } catch (err) {
        console.error(err);
      }
    },
  },
});
