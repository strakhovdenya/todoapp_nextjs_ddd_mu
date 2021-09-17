import React, {useState} from "react";
import {TodoItem} from "../src/domain/TudoItem";
import {UniqueId} from "../src/types";
import {useRemoveOneTask} from "../src/application/deleteTask";
import {useStartEditTask} from "../src/application/startEditTask";
import Router from 'next/router'

type taskProps = {
    task: TodoItem;
};

const Task = ({task}: taskProps) => {

    const [loading, setLoading] = useState(false);

    const {removeOneTask} = useRemoveOneTask();
    const {startEditTask} = useStartEditTask();

    async function handleDelete(id: UniqueId) {
        setLoading(true);
        await removeOneTask(id)
        setLoading(false);
    }

    async function handleEdit(id) {
        await startEditTask(id);
        await Router.push('/edit');
    }


    return (
        <li className="list-item">
            <span>{task.content}</span>
            <div>
                <button
                    className="btn-delete task-btn"
                    onClick={() => handleDelete(task.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button
                    className="btn-edit task-btn"
                    onClick={() => handleEdit(task.id)}
                >
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task;