import usersSagas from "./usersSagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...usersSagas]);
}
