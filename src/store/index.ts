import { defineStore } from 'pinia';

import UserService from '../service/user.service';
import { User } from '../types';

export const useStore = defineStore('main', {
  state: () => ({
    users: [] as User[],
  }),
  actions: {
    async getUsers(): Promise<void> {
      try {
        const response = await UserService.getUsers()
        this.users = response.data.results
      } catch (err) {
        console.error(err);
      }
    },
  },
});
