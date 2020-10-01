import { SET_WATCHLIST } from "../actions/ActionTypes";

const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case SET_WATCHLIST:
      return [ ...action.payload ];
    default:
      return state;
  }
};

export default watchlistReducer;