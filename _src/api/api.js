import axios from 'axios';
import getConfig from 'next/config';
import Utils from '../utils/utils';

const { publicRuntimeConfig: { AUTH_URL } } = getConfig();

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((c) => {
  const token = Utils.getToken();
  if (token) {
    c.headers.Authorization = `Bearer ${token}`;
  }
  return c;
}, (error) => Promise.reject(error));

// api.interceptors.response.use((res) => res, (error) => {
//   if (error?.response?.status === 401) {
//     // Utils.removeToken();
//   }
//   return Promise.reject(error);
// });

class Api {
  // static cancel(methodName) {
  //   if (apiTokens[methodName]) {
  //     apiTokens[methodName]();
  //   }
  // }
  //
  // static cancelToken(methodName) {
  //   return new axios.CancelToken((token) => {
  //     apiTokens[methodName] = token;
  //   });
  // }

  static login(data) {
    return api.post(`${AUTH_URL}/customers/login`, data);
  }

  static getAccountInfo() {
    return api.get(`${AUTH_URL}/customers/account`);
  }

  static registration(data) {
    return api.post(`${AUTH_URL}customers/register`, data);
  }

  static resetPassword(data) {
    return api.post(`${AUTH_URL}/customers/reset-password`, data);
  }

  static forgotPassword(data) {
    return api.post(`${AUTH_URL}/customers/forgot-password`, data);
  }
}

export default Api;
