import { FilePayload } from '@/types';
import instance from '../axios-config';

class FileService {
  upload(payload: FilePayload) {
    return instance.post('api/drive/upload', payload);
  }
}

export default new FileService();
