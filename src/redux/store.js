import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import "regenerator-runtime/runtime"
import createSagaMiddleware from '@redux-saga/core'
import reducer from "./reducer"
import middleware from "./middleware"

const sagaMiddleware= createSagaMiddleware();

export const store= createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);


sagaMiddleware.run(middleware);