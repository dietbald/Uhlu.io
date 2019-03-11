import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import UhluItems from "./UhluItems";

export default combineReducers({
  items: UhluItems,
  form: formReducer,

});
