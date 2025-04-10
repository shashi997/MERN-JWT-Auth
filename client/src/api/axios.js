import axios from 'axios';

export default axios.create({
  baseURL: 'https://mern-jwt-auth-server-lime.vercel.app/api',
  withCredentials: true,
});
