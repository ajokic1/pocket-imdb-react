import { call, put, select } from "redux-saga/effects";
import { commentService } from "../../services/CommentService";
import { appendComments, setComments } from "../actions/CommentActions";

export function* commentsGet({ payload }) {
  try {
    const { data } = yield call(commentService.getComments, payload, 1);
    yield put(setComments(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* commentsLoadMore({ payload }) {
  try {
    const current_page = yield select(state => state.comment.current_page);
    const { data } = yield call(commentService.getComments, payload, current_page + 1);
    yield put(appendComments(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}