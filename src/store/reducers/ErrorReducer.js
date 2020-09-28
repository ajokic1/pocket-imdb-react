import {
  LOGIN_ERROR,
  LOGOUT_ERROR,
  REGISTER_ERROR,
} from "../actions/ActionTypes";

const initialState = {
  loginError: false,
  logoutError: false,
  registerError: false,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    case LOGOUT_ERROR:
      return { ...state, logoutError: action.payload };
    case REGISTER_ERROR:
      return { ...state, registerError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
