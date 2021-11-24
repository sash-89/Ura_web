import ObjectToFormData from 'object-to-formdata';

class Utils {
  // static correctMediaUrl = (url) => `${API_URL}${url}`;

  static emailValidator = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return reg.test(String(email).toLowerCase());
  };

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

    const val = past ? pastValueWithCurrentValue : value.substring(0, selectionStart) + e.key + value.substring(selectionStart, value.length);
    const valueToNumber = +val;

    if (e.which === 32 || (positiveNumber ? +val.slice(0, 1) === 0 : false) || isNaN(valueToNumber) || val.includes('.') || val.includes('e')) {
      e.preventDefault();
    }
  };

  static keyPressPhoneNumber = (e, past) => {
    const { selectionStart, value } = e.target;
    const pastValueWithCurrentValue = value.slice(0, selectionStart) + e?.clipboardData?.getData('text');

    const val = past ? pastValueWithCurrentValue : value.substring(0, selectionStart) + e.key + value.substring(selectionStart, value.length);

    if (!/^\+?[0-9]*$/.test(val)) {
      e.preventDefault();
    }
  };

  static keyPressCurrency = (e, past, maxValue) => {
    const { selectionStart, value } = e.target;
    const pastValueWithCurrentValue = value.slice(0, selectionStart) + e?.clipboardData?.getData('text');

    const val = past ? pastValueWithCurrentValue : value.substring(0, selectionStart) + e.key + value.substring(selectionStart, value.length);
    const valueToNumber = +val;

    if (e.which === 32 || (value && +value.slice(0, 1) === 0 && val.slice(1, 2) !== '.') || (val.slice(0, 1) === '.' && !isNaN(+val.slice(1, val.length)
      .replace('.', 'nun')) ? false : isNaN(valueToNumber)) || val.includes('e') || (maxValue && valueToNumber > maxValue)) {
      e.preventDefault();
    }
  };

  static formData = (data) => ObjectToFormData.serialize(data)
}

export default Utils;
