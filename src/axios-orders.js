import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-dc047.firebaseio.com/'
});

export default instance;
