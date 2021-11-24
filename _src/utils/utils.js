import ObjectToFormData from 'object-to-formdata';

class Utils {
  // static correctMediaUrl = (url) => `${API_URL}${url}`;

  static emailValidator = (email) => {
    // eslint-disable-next-line max-len
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return reg.test(String(email).toLowerCase());
  };

  static phoneNumberValidator = (phoneNumber) => {
    const reg = /^(\+?(?:[\s-]?\d+))\s?\(?([\d]{1,10}(?:[\s-]?\d+))(\)?(?:[\s-]?\d+))[\d]{1,12}(?:[\s-]?\d+)+$/g;

    return reg.test(String(phoneNumber));
  }

  static formData = (data) => ObjectToFormData.serialize(data)

  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    try {
      return localStorage.getItem('token') || false;
    } catch (e) {
      return false;
    }
  }

  static removeToken() {
    localStorage.removeItem('token');
  }
}

export default Utils;
