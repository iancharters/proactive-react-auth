// =============================================================================
// Import modules.
// =============================================================================
import api from 'utils/api';
import { reset } from 'redux-form';

export const types = {
  LOGIN_REQUEST: 'SESSION/LOGIN_REQUEST',
  SIGNUP_REQUEST: 'SESSION/SIGNUP_REQUEST',
  LOGOUT: 'SESSION/LOGOUT',
  AUTHENTICATION_REQUEST: 'SESSION/AUTHENTICATION_REQUEST',
  AUTHENTICATION_SUCCESS: 'SESSION/AUTHENTICATION_SUCCESS',
  AUTHENTICATION_FAILURE: 'SESSION/AUTHENTICATION_FAILURE',
  CONNECT: 'SESSION/CONNECT',
  CONNECT_REQUEST: 'SESSION/CONNECT_REQUEST',
  CONNECT_SUCCESS: 'SESSION/CONNECT_SUCCESS',
  CONNECT_FAILURE: 'SESSION/CONNECT_FAILURE',
};

// Rework later on to suppress errors in console.
export const login = data => {
  return dispatch => {
    dispatch({ type: types.LOGIN_REQUEST });

    return api.post('/sessions', data).then(response => {
      response.data.meta.token === undefined
        ? dispatch({ type: types.AUTHENTICATION_FAILURE })
        : dispatch({ type: types.AUTHENTICATION_SUCCESS, response });
    }).catch(err => console.log(err));
  };
};

export const signup = data => ({ type: types.SIGNUP_REQUEST, data });
export const logout = () => ({ type: types.LOGOUT });
export const authenticate = () => ({ type: types.AUTHENTICATION_REQUEST });
export const unauthenticate = () => ({ type: types.AUTHENTICATION_FAILURE });
export const createSocket = data => ({ type: types.CONNECT_REQUEST, data });
