
import EditForm from "../components/EditForm";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Main from "../components/Main";

export default function Edit() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Main>
                <EditForm/>
            </Main>
        </React.Fragment>
    )
}