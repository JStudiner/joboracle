import {UPDATE_SCORE} from './actions'
import {takeEvery} from "@redux-saga/core/effects"

export function* updateScore(){
    yield takeEvery(UPDATE_SCORE,function*(){
        //no async are needed so we go right to the reducer
    });
}

export default function*(){
    yield* updateScore()
}