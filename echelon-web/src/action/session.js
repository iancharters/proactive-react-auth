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

// saga
export const login = data => ({ type: types.LOGIN_REQUEST, data });
export const signup = data => ({ type: types.SIGNUP_REQUEST, data });
export const logout = () => ({ type: types.LOGOUT });
export const authenticate = () => ({ type: types.AUTHENTICATION_REQUEST });
export const unauthenticate = () => ({ type: types.AUTHENTICATION_FAILURE });
export const createSocket = data => ({ type: types.CONNECT_REQUEST, data });
