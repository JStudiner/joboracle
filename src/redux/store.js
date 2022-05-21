import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import "regenerator-runtime/runtime"

import reducer from "./reducer"




export const store= createStore(
    reducer,
    composeWithDevTools()
);


