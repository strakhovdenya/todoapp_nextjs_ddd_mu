import React, {useState} from "react";
import {useAddNewTask} from "../application/addTask";
import Grid from "@material-ui/core/Grid";
import InputContent from "./form/InputContent";
import InputDate from "./form/InputDate";
import SubmitButton from "./form/SubmitButton";
import TaskFormBase from "./form/TaskFormBase";

const TaskForm = () => {

    const {addNewTask} = useAddNewTask()

    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleChangeDate = async (e) => {
        await setDate(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!content) {
            return;
        }

        await addNewTask(content, date);
        setContent("");
        setDate('');
    }

    return (
        <TaskFormBase handleSubmit={handleSubmit}>
            <InputContent
                actionOnChange={handleChange}
                content={content}
            />

            <InputDate
                actionOnChange={handleChangeDate}
                date={date}
            />

            <Grid container spacing={2} justifyContent="center">
                <SubmitButton
                    text="ADD"
                />
            </Grid>
        </TaskFormBase>
    )
}

export default TaskForm;