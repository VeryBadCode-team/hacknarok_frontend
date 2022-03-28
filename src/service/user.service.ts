import axios from 'axios';
import instance from './axios-config';
import { LoginModelType } from '../types';
import { SignUpModelType } from '../types';

class UserService {
  // TODO: delete getUsers() in real project and then remove import
  getUsers() {
    return axios.get('https://randomuser.me/api/?results=10');
  }
  login(payload: LoginModelType) {
    return instance.post('api/auth/login', payload);
  }
  register(payload: SignUpModelType) {
    return instance.post('api/auth/register', payload);
  }
  // Example querry with param:
  getUser(id: string | number) {
    return instance.get('api/auth/user?id=' + id);
  }
}

export default new UserService();
