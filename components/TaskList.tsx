import React from "react";

import {useTodoListStorage} from "../src/services/storeAdaptor";
import Task from "./Task";
import {TodoItem} from "../src/domain/TudoItem";

const TaskList = () => {

    const {tasks} = useTodoListStorage()

    return (
        <div>
            {tasks.todos.length? (
                <ul className="list">
                    {tasks.todos.map((task:TodoItem) => {
                        return <Task task={task} key={task.id}/>
                    })}
                </ul>
            ) :(
                <div className="no-tasks">No Tasks</div>
            )}

        </div>
    )
}

export default TaskList;