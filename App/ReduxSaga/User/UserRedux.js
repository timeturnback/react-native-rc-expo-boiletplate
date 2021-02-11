import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setUserData: ["data"]
});

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  user: null
});

/* ------------- Selectors ------------- */
const getReducerState = (state) => state.user;

/* ------------- Reducers ------------- */

const setUserData = (state, { data }) => state.merge({ user: data });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER_DATA]: setUserData
});

export default {
  Types,
  Creators,
  getReducerState
};
