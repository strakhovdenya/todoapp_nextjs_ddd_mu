import Header from "../components/Header";
import Main from "../components/Main";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";




export default function Home() {

    return (
        <React.Fragment>
            <CssBaseline/>
            <Main>
                <TaskForm/>
                <TaskList/>
            </Main>
        </React.Fragment>
    )
}
