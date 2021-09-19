import Main from "../src/ui/Main";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import TaskForm from "../src/ui/TaskForm";
import TaskList from "../src/ui/TaskList";
import {useDbService} from "../src/services/dbAdaptor";

export default function Home({taskProp}) {

    return (
        <React.Fragment>
            <CssBaseline/>
            <Main>
                <TaskForm/>
                <TaskList taskProp={taskProp}/>
            </Main>
        </React.Fragment>
    )
}

Home.getInitialProps = async () => {
    const {get} = useDbService();

    const taskProp = await get();

    return {taskProp};
}