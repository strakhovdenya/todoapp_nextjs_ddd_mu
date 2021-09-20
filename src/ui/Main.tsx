import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Header from "./Header";


const useStyles = makeStyles((theme) => ({
        content: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
        },
    })
);

const Main = ({children}) => {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <main>
                <div className={classes.content}>
                    {children}
                </div>
            </main>
        </>
    )
}

export default Main;