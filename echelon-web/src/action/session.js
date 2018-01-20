// =============================================================================
// Import modules.
// =============================================================================
import api from 'utils/api';
import { reset } from 'redux-form';

import { sessionTypes as types, errorTypes } from './constant';

function setCurrentUser(token) {
  localStorage.setItem('token', token);
}

// Rework later on to suppress errors in console.
export const login = data => {
  let error;

  return dispatch => {
    dispatch({ type: types.LOGIN_REQUEST });

    return api
      .post('/sessions', data)
      .then(response => {
        error = response.data.errors;

        if (response.data.meta.token !== undefined) {
          dispatch({ type: types.AUTHENTICATION_SUCCESS, response });
          //Puts the auth token in the localStorage browser object.
          setCurrentUser(response.data.meta.token);
          //Resets the `redux-form` for `signup`.
          reset('signup');
        }
      })
      .catch(err => {
        dispatch({ type: types.AUTHENTICATION_FAILURE });
        dispatch({ type: errorTypes.NEW_ERROR, message: error });
        //Remove localStorage token object.
        localStorage.removeItem('token');
      });
  };
};

export const authenticate = () => {
  let error;
  console.log("START")
  return dispatch => {
    console.log("REQUEST")
    dispatch({ type: types.AUTHENTICATION_REQUEST });
    return api
      .post('/sessions/refresh')
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err+"but y tho");
      });
  };
};

export const unauthenticate = () => {
  console.log("UNAUTH")
  return { type: types.AUTHENTICATION_FAILURE };
};

// export const authenticate = () => {
//   console.log("quack")
//   return {type: types.AUTHENTICATION_REQUEST}
// };

export const signup = data => ({ type: types.SIGNUP_REQUEST, data });
export const logout = () => ({ type: types.LOGOUT });
export const createSocket = data => ({ type: types.CONNECT_REQUEST, data });
