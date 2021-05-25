import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import { skillSlice } from "../app/modules/UserProfile/_redux/skill/skillSlice";
import { interestSlice } from "../app/modules/UserProfile/_redux/interest/interestSlice";
import { educationSlice } from "../app/modules/UserProfile/_redux/education/educationSlice";
import { experienceSlice } from "../app/modules/UserProfile/_redux/experience/experienceSlice";
import { profileSlice } from "../app/modules/UserProfile/_redux/profile/profileSlice";
import { networkSlice } from "../app/modules/Network/_redux/networkSlice";
import { postSlice } from "../app/modules/Feed/_redux/postsSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  skills : skillSlice.reducer,
  interests : interestSlice.reducer,
  educations : educationSlice.reducer,
  profile : profileSlice.reducer,
  experiences : experienceSlice.reducer,
  networks : networkSlice.reducer,
  posts : postSlice.reducer
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
