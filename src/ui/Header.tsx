import React from "react";
import Task from "./Task";
import {TodoItem} from "../domain/TudoItem";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

type headerProps = {
    headerTitle?: string;
};

const useStyles = makeStyles((theme) => ({
        rootAppbar: {
            flexGrow: 1,
        },
        appbar: {
            alignItems: 'center',
        },
    })
);

const Header = ({headerTitle}: headerProps) => {
    const classes = useStyles();
    const headerText = headerTitle || 'Todo App'

    return (
        <div className={classes.rootAppbar}>
            <AppBar className={classes.appbar} position="relative">
                <Toolbar>
                    {/*<CameraIcon className={classes.icon}/>*/}
                    <Typography variant="h6" color="inherit">
                        {headerText}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header