import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setUserData: ["data"],
  pushDetailInfo: ["data"],
  popDetailInfo: ["data"]
});

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  user: null,
  detailInfo: []
});

/* ------------- Selectors ------------- */
const getReducerState = (state) => state.user;

/* ------------- Reducers ------------- */

const setUserData = (state, { data }) => state.merge({ user: data });
const pushDetailInfo = (state, { data }) => {
  const { detailInfo } = state;
  const editDetailInfo = detailInfo?.asMutable({ deep: true })?.slice() || [];
  editDetailInfo.push(data);
  return state.merge({ detailInfo: editDetailInfo });
};
const popDetailInfo = (state) => {
  const { detailInfo } = state;
  const editDetailInfo = detailInfo?.asMutable({ deep: true })?.slice() || [];
  editDetailInfo.pop();
  return state.merge({ detailInfo: editDetailInfo });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER_DATA]: setUserData,
  [Types.PUSH_DETAIL_INFO]: pushDetailInfo,
  [Types.POP_DETAIL_INFO]: popDetailInfo
});

export default {
  Types,
  Creators,
  getReducerState
};
