import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        submit: {
            margin: theme.spacing(3, 0, 2),
        }
    })
);

const OnClickButton = ({handleClick, text}) => {
    const classes = useStyles();

    return (
        <Grid item>
            <Button
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleClick}
            >
                {text}
            </Button>
        </Grid>
    )
}

export default OnClickButton;