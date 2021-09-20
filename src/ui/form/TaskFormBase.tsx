import React from "react";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {UniqueId} from "../../types";

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

type TaskFormBaseCellProps = {
    handleSubmit: (e:any) => void,
    children: JSX.Element[]
};


const TaskFormBase = ({children, handleSubmit}:TaskFormBaseCellProps) => {

    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <Card className={classes.cardForm}>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    {children}
                </form>
            </Card>
        </Container>
    )
}

export default TaskFormBase;