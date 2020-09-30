import { SET_COMMENTS, APPEND_COMMENTS } from "../actions/ActionTypes";

const initialState = {
  loading: false,
  current_page: 1,
  data: [],
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, ...action.payload };
    case APPEND_COMMENTS:
      return {
        ...state,
        ...action.payload,
        data: { ...state.data, ...action.payload.data },
      };
    default:
      return state;
  }
};

export default movieReducer;
