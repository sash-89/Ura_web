import axios from 'axios';

const api = axios.create({
  baseURL: 'apiUrl',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiTokens = {};

class Api {
  static url = apiUrl;

  static cancel(methodName) {
    if (apiTokens[methodName]) {
      apiTokens[methodName]();
    }
  }

  static cancelToken(methodName) {
    return new axios.CancelToken((token) => {
      apiTokens[methodName] = token;
    });
  }

  // static getHomeContent() {
  //   return api('/api/home');
  // }
}

export default Api;
