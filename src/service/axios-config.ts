import axios from 'axios';

export const baseURL = 'https://hacknarok-api.verybadcode.pl/'

export default axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
