import React, {useState} from "react";
import {useAddNewTask} from "../application/addTask";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import InputContent from "./form/InputContent";
import InputDate from "./form/InputDate";
import SubmitButton from "./form/SubmitButton";

const useStyles = makeStyles((theme) => ({
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing()
        },
        cardForm: {
            padding: theme.spacing(2),
        },
    })
);

const TaskForm = () => {

    const classes = useStyles();

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
        <Container maxWidth="sm">
            <Card className={classes.cardForm}>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
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
                </form>
            </Card>
        </Container>
    )
}

export default TaskForm;