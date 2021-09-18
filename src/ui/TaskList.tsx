import React, {useEffect} from "react";

import {makeStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import {
    Table,
    TableBody,
    TableContainer,
} from "@material-ui/core";

import Task from "./Task";
import {useTodoListStorage} from "../services/storeAdaptor";
import {TodoItem} from "../domain/TudoItem";
import {useDbService} from "../services/dbAdaptor";

const useStyles = makeStyles((theme) => ({

    pt20: {
        paddingTop: theme.spacing(6),
    }
}));

const TaskList = ({taskProp}) => {

    const classes = useStyles();

    let {tasks, saveTasks} = useTodoListStorage()
    const {get} = useDbService();

    useEffect(() => {
        saveTasks(taskProp);
    }, [])

    if (taskProp && !tasks) {
        tasks = taskProp;
    }

    return (
        <Container maxWidth="md" className={classes.pt20}>
            {tasks.todos.length ? (
                <TableContainer>
                    <Table>
                        <TableBody>
                            {tasks.todos.map((task: TodoItem) => {
                                return <Task task={task} key={task.id}/>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <div className="no-tasks">No Tasks</div>
            )}
        </Container>
    )
}

export default TaskList;
