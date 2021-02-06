import { combineReducers } from 'redux';
import counterReducer from './counter';
import modalReducer from './modal';
import photosReducer from './photos';

export default combineReducers({
  counterReducer,
  modalReducer,
  photosReducer,
});
