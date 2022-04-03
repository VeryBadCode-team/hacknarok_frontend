import { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import { Meeting } from '@/types';

export const useMeeting = defineStore('meeting', {
  state: () => ({
    meeting: {} as Meeting,
  }),
  actions: {
    saveMeeting(payload: Meeting): void {
      this.meeting = payload;
    },
  },
});
