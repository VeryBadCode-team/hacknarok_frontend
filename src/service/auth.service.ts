import instance from './axios-config';

import { LoginModel } from '@/types';
import { SignUpModelPayload } from '@/types';

class AuthService {
  login(payload: LoginModel) {
    return instance.post('api/auth/login', payload);
  }
  register(payload: SignUpModelPayload) {
    return instance.post('api/auth/register', payload);
  }
  // Example querry with param:
  getUser(id: string | number) {
    return instance.get('api/auth/user?id=' + id);
  }
}

export default new AuthService();
