// =============================================================================
// Import modules.
// =============================================================================
import api from 'utils/api';
import { reset } from 'redux-form';

import { sessionTypes as types, errorTypes } from './constant';

const setCurrentUser = token => {
  localStorage.setItem('token', token);
};

const isGoodRequest = req => {
  return req.status === 200 || 201 ? true : false;
};

//TODO: Rework later on to suppress errors in console.
//TODO: catch is not what I want.  I need to do error checking in then.

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

  return dispatch => {
    dispatch({ type: types.AUTHENTICATION_REQUEST });
    return api
      .post('/sessions/refresh')
      .then(response => {
        error = response.data.errors;
        setCurrentUser(response.data.meta.token);
        dispatch({ type: types.AUTHENTICATION_SUCCESS, response });
      })
      .catch(err => {
        dispatch({ type: types.AUTHENTICATION_FAILURE });
        dispatch({ type: errorTypes.NEW_ERROR, message: error });
      });
  };
};

export const unauthenticate = () => {
  return { type: types.AUTHENTICATION_FAILURE };
};

export const logout = () => {
  api.delete('/sessions');
  localStorage.removeItem('token');

  return { type: types.LOGOUT };
};

export const signup = data => {
  let error;

  return dispatch => {
    dispatch({ type: types.SIGNUP_REQUEST });
    return api
      .post('/users', data)
      .then(response => {
        error = response.data.errors;
        if (isGoodRequest(response)) {
          setCurrentUser(response.data.meta.token);
          dispatch({ type: types.AUTHENTICATION_SUCCESS, response });
        } else {
          dispatch({ type: types.AUTHENTICATION_FAILURE });
          dispatch({ type: errorTypes.NEW_ERROR, message: error });
        }
      })
      .catch(err => {
        dispatch({ type: errorTypes.NEW_ERROR, message: error });
      });
  };
};
