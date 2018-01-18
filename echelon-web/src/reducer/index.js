// =============================================================================
// Import modules.
// =============================================================================
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// =============================================================================
// Import reducers.
// =============================================================================
import session from 'reducer/session';
import errors from 'reducer/errors';
import { sessionTypes } from 'action/constant';

const appReducer = combineReducers({
  form,
  session,
  errors,
});

export default function(state, action) {
  if (action.type === sessionTypes.LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}
