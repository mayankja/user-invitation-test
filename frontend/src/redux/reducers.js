import { combineReducers } from "redux";
import {
  GET_USER,
  GET_INVITES,
  ADD_INVITES,
  DELETE_INVITES,
  FAILED_OPERATION,
} from "./constants";

const initialState = {
  user: [],
  invites: [],
  toggleReload: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.data };
    case GET_INVITES:
      return { ...state, invites: action.data };
    case ADD_INVITES:
      return { ...state, toggleReload: !state.toggleReload };
    case DELETE_INVITES:
      return { ...state, toggleReload: !state.toggleReload };
    case FAILED_OPERATION:
      return { ...state, error: action.data };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
