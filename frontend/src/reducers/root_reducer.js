import { combineReducers } from 'redux';
import user from './user';
import giphs from './giphs';
import loading from './loading';
import errors from './errors';

export default combineReducers({
  user,
  giphs,
  loading,
  errors
});