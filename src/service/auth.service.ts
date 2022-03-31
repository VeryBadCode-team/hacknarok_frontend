import instance, { baseURL } from './axios-config';

import { LoginModel, UpdateUserPayload, SignUpModelPayload } from '@/types';

class AuthService {
  login(payload: LoginModel) {
    return instance.post('api/auth/login', payload);
  }
  register(payload: SignUpModelPayload) {
    return instance.post('api/auth/register', payload);
  }
  changeEmail(payload: UpdateUserPayload, token: string) {
    return instance.post('api/user', payload, {
      baseURL,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }
  changePassword(payload: UpdateUserPayload, token: string) {
    return instance.post('api/user/password', payload, {
      baseURL,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }
  // Example querry with param:
  getUser(id: string | number) {
    return instance.get('api/auth/user?id=' + id);
  }
}

export default new AuthService();
