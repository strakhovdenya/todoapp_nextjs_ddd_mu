import React from "react";
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const InputDate = ({actionOnChange, date}) => {

    return (
        <Grid container spacing={9} justifyContent="center">
            <Grid item>
                <TextField
                    label="Due date"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={date}
                    onChange={actionOnChange}
                />
            </Grid>
        </Grid>
    )
}

export default InputDate;