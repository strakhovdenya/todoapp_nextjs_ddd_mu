import React, {useState} from "react";
import {useEditOneTask} from "../application/editTask";
import {useEditTaskStorage} from "../services/storeAdaptor";
import Router from "next/router";
import Grid from "@material-ui/core/Grid";
import InputContent from "./form/InputContent";
import InputDate from "./form/InputDate";
import SubmitButton from "./form/SubmitButton";
import OnClickButton from "./form/OnClickButton";
import TaskFormBase from "./form/TaskFormBase";

const EditForm = () => {

    const {taskForEdit, saveEditItem} = useEditTaskStorage();

    const {editOneTask} = useEditOneTask()

    const [content, setContent] = useState(taskForEdit ? taskForEdit.content : '');
    const [date, setDate] = useState(taskForEdit ? taskForEdit.due_date : '');

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleChangeDate = async (e) => {
        await setDate(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!taskForEdit) {
            await Router.push('/');
        } else {
            await editOneTask(taskForEdit.id, content, date);
            await Router.push('/');
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault();
        saveEditItem(null);
        await Router.push('/');
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
                    text="EDIT"
                />

                <OnClickButton
                    handleClick={handleCancel}
                    text="CANCEL"
                />
            </Grid>
        </TaskFormBase>
    )
}

export default EditForm;