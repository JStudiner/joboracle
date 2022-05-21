import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import {store} from "./redux/store"
import ConnectedApp from "./app"
import { composeWithDevTools } from 'redux-devtools-extension';
const App =()=>{
    return <Provider store={store}>
        <ConnectedApp/>
        </Provider> 
}

ReactDom.render(<App/>,document.getElementById("root"))