import axios from 'axios';
import { LoginModelType } from '../types';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};

class UserService {
  getUsers() {
    return axios.get('https://randomuser.me/api/?results=10', config);
  }
  login(payload: LoginModelType) {
    return axios.post(
      'https://hacknarok-api.verybadcode.pl/api/auth/login',
      payload,
      config,
    );
  }
}

export default new UserService();
