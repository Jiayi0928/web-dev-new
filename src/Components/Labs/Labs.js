import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes/index.js";
import Styles from "./Styles/index.js";
import ConditionalOutput from "./ConditionalOutput/index.js";
import TodoList from "./Todo/TodoList.js";
import ReduxExamples from "./redux-examples/index.js";
const Labs = () => {
    return(
    <div>
        <h1>Labs</h1>

        <Link to="/hello">Hello</Link> |<Link to="/tuiter/">Tuiter</Link>

        <ReduxExamples />

        <TodoList />
        <ConditionalOutput />
        <Styles />
        <Classes />
    </div>
    )
};
export default Labs;