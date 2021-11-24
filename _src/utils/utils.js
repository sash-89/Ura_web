import ObjectToFormData from 'object-to-formdata';
import Cookie from 'js-cookie';
import _ from 'lodash';

class Utils {
  // static correctMediaUrl = (url) => `${API_URL}${url}`;

  static deleteEmptyKeys = (object) => {
    const obj = _.cloneDeep(object);
    // eslint-disable-next-line no-restricted-syntax
    for (const propName in obj) {
      if (typeof obj[propName] !== 'boolean' && !obj[propName]) {
        delete obj[propName];
      }
    }

    return obj;
  };

  static keyPressOnlyNumber = (e, past, positiveNumber) => {
    let { value } = e.target;
    const { selectionStart } = e.target;
    value = value.replace('%', '');

    const pastValueWithCurrentValue = value.slice(0, selectionStart) + e?.clipboardData?.getData('text');

    const val = past
      ? pastValueWithCurrentValue
      : value.substring(0, selectionStart) + e.key + value.substring(selectionStart, value.length);
    const valueToNumber = +val;

    if (e.which === 32 || (positiveNumber
    // eslint-disable-next-line no-restricted-globals
      ? +val.slice(0, 1) === 0 : false) || isNaN(valueToNumber)
        || val.includes('.') || val.includes('e')) {
      e.preventDefault();
    }
  };

  static keyPressPhoneNumber = (e, past) => {
    const { selectionStart, value } = e.target;
    const pastValueWithCurrentValue = value.slice(0, selectionStart) + e?.clipboardData?.getData('text');

    const val = past
      ? pastValueWithCurrentValue
      : value.substring(0, selectionStart) + e.key + value.substring(selectionStart, value.length);

    if (!/^\+?[0-9]*$/.test(val)) {
      e.preventDefault();
    }
  };

  static keyPressCurrency = (e, past, maxValue) => {
    const { selectionStart, value } = e.target;
    const pastValueWithCurrentValue = value.slice(0, selectionStart) + e?.clipboardData?.getData('text');

    const val = past
      ? pastValueWithCurrentValue
      : value.substring(0, selectionStart) + e.key + value.substring(selectionStart, value.length);
    const valueToNumber = +val;

    if (e.which === 32 || (value && +value.slice(0, 1) === 0 && val.slice(1, 2) !== '.')
        // eslint-disable-next-line no-restricted-globals
        || (val.slice(0, 1) === '.' && !isNaN(+val.slice(1, val.length)
          .replace('.', 'nun'))
        // eslint-disable-next-line no-restricted-globals
          ? false : isNaN(valueToNumber)) || val.includes('e')
        || (maxValue && valueToNumber > maxValue)) {
      e.preventDefault();
    }
  };

  static formData = (data) => ObjectToFormData.serialize(data)

  static setToken(token) {
    Cookie.set('token', token);
  }

  static getToken() {
    try {
      return Cookie.get('token') || false;
    } catch (e) {
      return false;
    }
  }

  static removeToken() {
    Cookie.remove('token');
  }
}

export default Utils;
