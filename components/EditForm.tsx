import React, {useContext, useState, useEffect} from "react";

import {useClearTasks} from "../src/application/clearTasks";
import {useAddNewTask} from "../src/application/addTask";
import {useEditOneTask} from "../src/application/editTask";
import {useEditTaskStorage} from "../src/services/storeAdaptor";
import Router from "next/router";


const EditForm = () => {


    const {taskForEdit,saveEditItem} = useEditTaskStorage();

    const {editOneTask} = useEditOneTask()

    const [content, setContent] = useState(taskForEdit ? taskForEdit.content : '');

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editOneTask(taskForEdit.id, content, taskForEdit.due_date);
        await Router.push('/');
    }

    const handleCancel = async (e) => {
        saveEditItem(null);
        await Router.push('/');
    }



    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text"
                value={content}
                className="task-input"
                placeholder="add task..."
                required
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    Edit task
                </button>
                <button
                    className="btn clear-btn"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default EditForm;