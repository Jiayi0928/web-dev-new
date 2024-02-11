import React from "react";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import hello from "./reducers/hello.js";
import todos from "./reducers/todos-reducer.js"
import Todos from "./todos-component.js";
import HelloReduxExampleComponent from "./hello-redux-example-component.js";

// const store = createStore(hello);

const reducers = combineReducers({hello, todos})
const store = createStore(reducers);
const ReduxExamples = () => {
    return(
        <Provider store={store}>
        <div>
            <h2>Redux Examples</h2>
            <Todos />
            <HelloReduxExampleComponent />
        </div>
        </Provider>
    );
};

export default ReduxExamples;