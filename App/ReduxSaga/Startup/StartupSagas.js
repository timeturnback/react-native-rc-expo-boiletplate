import { put } from "redux-saga/effects";
import { AppRedux } from "../reducers";

// process STARTUP actions
export function* startup(action) {
  yield put(AppRedux.Creators.reduxStateRestored());
}
