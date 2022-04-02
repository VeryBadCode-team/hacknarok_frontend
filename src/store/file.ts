import { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';

import FileService from '@/service/file/file.service';
import { File, FilePayload, RegisterResponse } from '@/types';
import { ToastType } from '@/types';
import { toastNotification } from '@/helpers';

export const useFile = defineStore('file', {
  state: () => ({
    file: {} as File,
  }),
  actions: {
    async upload(payload: FilePayload): Promise<void> {
      try {
        const response: AxiosResponse<any, any> = await FileService.upload(
          payload,
        );
        console.log(response.data)
        // if (response.data.id) {
        //   const newPayload: LoginModel = {
        //     email: payload.email,
        //     password: payload.password,
        //   };
      } catch (err) {
        toastNotification(ToastType.ERROR, 'Something is wrong');
      }
    },
  },
});
