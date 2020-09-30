import { SET_COMMENTS, APPEND_COMMENTS, SET_COMMENT_LOADING } from "../actions/ActionTypes";

const initialState = {
  loading: false,
  current_page: 1,
  data: [],
};
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT_LOADING:
      return { ...state, loading: action.payload };
    case SET_COMMENTS:
      return { ...state, ...action.payload };
    case APPEND_COMMENTS:
      return {
        ...state,
        ...action.payload,
        data: [ ...state.data, ...action.payload.data ],
      };
    default:
      return state;
  }
};

export default commentReducer;
