import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AppRedux, StartupRedux } from "./reducers";

/* ------------- Sagas ------------- */
import { startup } from "./Startup/StartupSagas";
import {
  reduxStateRestored,
  cacheAssetsStart,
  checkPeriodActiveTime,
  initializeApp
} from "./App/AppSagas";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    //
    takeLatest(StartupRedux.Types.STARTUP, startup),

    // APP
    takeLatest(AppRedux.Types.INITIALIZE_APP, initializeApp),
    takeLatest(AppRedux.Types.REDUX_STATE_RESTORED, reduxStateRestored),
    takeLatest(AppRedux.Types.CACHE_ASSETS_START, cacheAssetsStart),
    takeLatest(AppRedux.Types.CHECK_PERIOD_ACTIVE_TIME, checkPeriodActiveTime)
  ]);
}
