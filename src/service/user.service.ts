import axios from 'axios';

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
}

export default new UserService();
