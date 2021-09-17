import React from "react";
import Task from "./Task";
import {TodoItem} from "../src/domain/TudoItem";

type headerProps = {
    headerTitle?: string;
};

const Header = ({headerTitle}: headerProps) => {
    const headerText = headerTitle || 'Task Manager'
    return (
        <div className="header">
            <h1>{headerText}</h1>
        </div>
    )
}

export default Header