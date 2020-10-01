import { call, put, select } from "redux-saga/effects";
import { commentService } from "../../services/CommentService";
import { appendComments, setComments, setLoading } from "../actions/CommentActions";

export function* commentsGet({ payload }) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(commentService.getComments, payload, 1);
    yield put(setComments(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  } finally {
    yield put(setLoading(false));
  }
}

export function* commentsLoadMore({ payload }) {
  try {
    yield put(setLoading(true));
    const current_page = yield select(state => state.comments.current_page);
    const { data } = yield call(commentService.getComments, payload, current_page + 1);
    yield put(appendComments(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  } finally {
    yield put(setLoading(false));
  }
}

export function* commentsAdd({ payload }) {
  try {
    const { data } = yield call(commentService.addComment, payload);
    yield put(appendComments({ data: [ data ] }));
  } catch (error) {
    console.log(error);
  }
}