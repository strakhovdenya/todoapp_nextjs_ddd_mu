import React, {useState} from "react";
import {TodoItem} from "../src/domain/TudoItem";
import {UniqueId} from "../src/types";
import {useRemoveOneTask} from "../src/application/deleteTask";
import {useStartEditTask} from "../src/application/startEditTask";
import Router from 'next/router'
import {
    Checkbox,
    TableCell,
    TableRow,
} from "@material-ui/core";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import {makeStyles} from "@material-ui/core/styles";
import {useChangeStatusTask} from "../src/application/changeStatus";



const useStyles = makeStyles((theme) => ({
    tableCell: {
        borderBottom: 0,
    },
    managingTableCell: {
        borderBottom: 0,
        "&:hover": {
            cursor:"pointer",
            backgroundColor:"rgba(96, 125, 139, 0.04)"
        }
    },

}));

type chekBoxCellProps = {
    isChecked: boolean;
    id: UniqueId;
};

const ChekBoxTableCell = ({isChecked, id}: chekBoxCellProps) => {
    const classes = useStyles();
    const {changeStatusTask} = useChangeStatusTask();

    const handleChangeStatus = async (e) => {
        await changeStatusTask(e.target.checked, id)
    }

    return (
        <TableCell padding="checkbox" className={classes.tableCell}>
            <Checkbox
                icon={<CircleUnchecked color="primary"/>}
                checkedIcon={<CircleCheckedFilled color="primary"/>}
                checked={Boolean(isChecked)}
                onChange={handleChangeStatus}
            />
        </TableCell>
    )
}

type managingTableCellProps = {
    action: (id: UniqueId) => void;
    id: UniqueId;
    width?:number;
    children:JSX.Element
};

const ManagingTableCell = ({children,action, id, width = 50}: managingTableCellProps) => {
    const classes = useStyles();

    return (
        <TableCell
            align="right"
            style={{width: width}}
            className={classes.tableCell +' '+ classes.managingTableCell}
            onClick={() => action(id)}
        >
            {children}
        </TableCell>
    )
}



type taskProps = {
    task: TodoItem;
};

const Task = ({task}: taskProps) => {

    const classes = useStyles();

    const [loading, setLoading] = useState(false);

    const {removeOneTask} = useRemoveOneTask();
    const {startEditTask} = useStartEditTask();

    const handleDelete = async (id: UniqueId) => {
        setLoading(true);
        await removeOneTask(id)
        setLoading(false);
    }

    const handleEdit = async (id) => {
        await startEditTask(id);
        await Router.push('/edit');
    }

    return (
        <TableRow hover>
            <ChekBoxTableCell isChecked={task.status} id={task.id} />

            <TableCell align="left" className={classes.tableCell} style={{width: 150}}>{task.due_date}</TableCell>

            <TableCell align="left" className={classes.tableCell}>{task.content}</TableCell>

            <ManagingTableCell action={handleEdit} id={task.id} >
                <CreateIcon color="primary"/>
            </ManagingTableCell>

            <ManagingTableCell action={handleDelete} id={task.id} >
                <DeleteIcon color="primary"/>
            </ManagingTableCell>
        </TableRow>
    )
}

export default Task;