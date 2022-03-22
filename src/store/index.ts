import { defineStore } from 'pinia';

import UserService from '../service/user.service';
import { LoginModelType, User, UserInTable } from '../types';

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
      } catch (err) {
        console.error(err);
      }
    },
  },
});
