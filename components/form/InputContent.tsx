import React from "react";
import {TextField} from "@material-ui/core";

const InputContent = ({actionOnChange, content}) => {

    return (

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={content}
            label="Enter Title"
            autoFocus
            onChange={actionOnChange}
        />

    )
}

export default InputContent;