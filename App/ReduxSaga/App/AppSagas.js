import { put, select, all } from "redux-saga/effects";
//
import AppRedux from "./AppRedux";
//
import cacheAssetsAsync from "../../Utilities/cacheAssetsAsync";

export const initializeApp = function* () {
  // cache assets and register push
  yield all([put(AppRedux.Creators.cacheAssetsStart())]);
};

export const reduxStateRestored = function* () {
  yield put(AppRedux.Creators.setAppStateRestored());
};

export const cacheAssetsStart = function* () {
  try {
    yield cacheAssetsAsync();
    yield put(AppRedux.Creators.cacheAssetsFinish(null));
  } catch (e) {
    __DEV__ &&
      console.warn(
        "There was an error caching assets (see: main.js), perhaps due to a " +
          "network timeout, so we skipped caching. Reload the app to try again."
      );
    __DEV__ && console.warn(e.message);
    yield put(AppRedux.Creators.cacheAssetsFinish(e));
  }
};

export const checkPeriodActiveTime = function* () {
  try {
    const { lastActiveTime } = yield select(AppRedux.getReducerState);

    // Do things after app in background {duration} time
    // const duration = moment().diff(moment(lastActiveTime));
  } catch (e) {
    yield put(AppRedux.Creators.checkPeriodActiveTimeFinish(e));
  }
};
