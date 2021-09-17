import React, {useState} from "react";

import {useClearTasks} from "../src/application/clearTasks";
import {useAddNewTask} from "../src/application/addTask";


const TaskForm = () => {


    const {clearTasks} = useClearTasks()
    const {addNewTask} = useAddNewTask()


    const [content, setContent] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addNewTask(content, '2020:01:03');
        setContent("");
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
                    Add task
                </button>
                <button
                    className="btn clear-btn"
                    onClick={clearTasks}
                >
                    Clear
                </button>
            </div>
        </form>
    )
}

export default TaskForm;