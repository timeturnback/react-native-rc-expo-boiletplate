import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import moment from "moment";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  initializeApp: null,
  cacheAssetsStart: null,
  cacheAssetsFinish: ["error"],

  setAppStateRestored: null,

  reduxStateRestored: null,
  setReduxStateRestored: null,

  setLastActiveTime: null,
  checkPeriodActiveTime: null,

  showGlobalLoading: null,
  hideGlobalLoading: null
});

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  app_state_restored: false,
  assets_cached: false,
  redux_state_restored: false,

  lastActiveTime: null,
  globalLoading: false
});

/* ------------- Selectors ------------- */
const getReducerState = (state) => state.app;
const getLastActiveTime = ({ lastActiveTime }) => lastActiveTime;
const isAppStateRestored = (state) => state.app_state_restored;
const isAssetsCached = (state) => state.assets_cached;
const isPushTokenRegistered = (state) => state.push.registered;
const isReduxStateRestored = (state) => state.redux_state_restored;
const isReady = (state) =>
  state.app_state_restored && state.assets_cached && state.redux_state_restored;

/* ------------- Reducers ------------- */
const cacheAssetsFinish = (state, { error }) =>
  state.merge({
    assets_cached: true
  });

const setAppStateRestored = (state) =>
  state.merge({
    app_state_restored: true
  });

const setReduxStateRestored = (state) =>
  state.merge({
    redux_state_restored: true
  });

const setLastActiveTime = (state) =>
  state.merge({
    lastActiveTime: moment().format()
  });

const showGlobalLoading = (state) => state.merge({ globalLoading: true });
const hideGlobalLoading = (state) => state.merge({ globalLoading: false });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CACHE_ASSETS_FINISH]: cacheAssetsFinish,
  [Types.SET_APP_STATE_RESTORED]: setAppStateRestored,
  [Types.SET_REDUX_STATE_RESTORED]: setReduxStateRestored,
  [Types.SET_LAST_ACTIVE_TIME]: setLastActiveTime,

  [Types.SHOW_GLOBAL_LOADING]: showGlobalLoading,
  [Types.HIDE_GLOBAL_LOADING]: hideGlobalLoading
});

/* ------------- Export ------------- */
export default {
  getReducerState,
  isAppStateRestored,
  isAssetsCached,
  isPushTokenRegistered,
  isReduxStateRestored,
  isReady,
  getLastActiveTime,

  // default export
  Types,
  Creators
};
