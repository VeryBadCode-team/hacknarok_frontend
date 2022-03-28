import axios from 'axios';

export default axios.create({
  baseURL: 'https://hacknarok-api.verybadcode.pl/',
  headers: {
    'Content-type': 'application/json',
  },
});
