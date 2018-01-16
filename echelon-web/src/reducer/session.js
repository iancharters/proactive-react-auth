import { types as sessionTypes } from 'actions/session';

const initialState = {
  isAuthenticated: false,
  willAuthenticate: true,
  currentUser: {},
  conn: {
    socket: null,
    channel: null,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case sessionTypes.LOGIN_REQUEST:
      return {
        ...state,
        willAuthenticate: true,
      };
    case sessionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        willAuthenticate: true,
      };
    case sessionTypes.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        willAuthenticate: false,
        currentUser: action.response.data,
      };
    case sessionTypes.CONNECT_SUCCESS:
      return {
        ...state,
        conn: {
          socket: action.payload.socket,
          channel: action.payload.channel,
        },
      };
    case sessionTypes.CONNECT_FAILURE:
      console.log('FIRIN');
      console.log('FAILURE');
      console.log('FIRING');
      return {
        ...state,
      };
    case sessionTypes.AUTHENTICATION_FAILURE:
      return {
        ...state,
        willAuthenticate: false,
      };
    case sessionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        willAuthenticate: false,
        currentUser: {},
      };
    default:
      return state;
  }
}
