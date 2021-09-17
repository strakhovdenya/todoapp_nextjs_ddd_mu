import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import { on } from "events";


const useStyles = makeStyles((theme) => ({
        submit: {
            margin: theme.spacing(3, 0, 2),
        }
    })
);

const SubmitButton = ({text}) => {
    const classes = useStyles();

    return (
        <Grid item>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                {text}
            </Button>
        </Grid>
    )
}

export default SubmitButton;