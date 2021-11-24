import { define } from '../redux-request';
import api from '../../api/api';

export const LOGIN_REQUEST = define('LOGIN_REQUEST');

export function loginRequest(data) {
  return LOGIN_REQUEST.request(() => api.login(data));
}

export const REGISTRATION_REQUEST = define('REGISTRATION_REQUEST');

export function registrationRequest(data) {
  return GET_ACCOUNT.request(() => api.registration(data));
}

export const RESET_PASSWORD_REQUEST = define('RESET_PASSWORD_REQUEST');

export function resetPasswordRequest(data) {
  return GET_ACCOUNT.request(() => api.resetPassword(data));
}

export const GET_ACCOUNT = define('GET_ACCOUNT');

export function getAccountRequest() {
  return GET_ACCOUNT.request(() => api.getAccountInfo());
}

export const FORGOT_PASSWORD = define('FORGOT_PASSWORD');

export function forgotPasswordRequest(data) {
  return FORGOT_PASSWORD.request(() => api.forgotPassword(data));
}

// export const ACCESS_REQUEST_SETTINGS = define('ACCESS_REQUEST_SETTINGS');
//
// export function accessSettingsRequest(data) {
//     return ACCESS_REQUEST_SETTINGS.request(() => api.accessRequest(data));
// }
