import { all } from "redux-saga/effects";
import clienteSaga from "./Cliente/saga"

export default function* rootSaga() {
    yield all([
        clienteSaga,
    ]);
}
