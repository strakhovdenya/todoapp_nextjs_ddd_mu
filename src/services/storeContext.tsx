import React, {createContext, useState} from "react";
import {useContext} from "react";


const StoreContext = createContext({});

export const useStore = () => useContext(StoreContext);

const TaskListContextProvider = ({children}) => {


    const [tasks, setTasks] = useState();

    const [taskForEdit, setEditTask] = useState(null)


    const value = {
        tasks,
        saveTasks: setTasks,
        taskForEdit,
        saveEditItem: setEditTask
    }

    return (
        <StoreContext.Provider value={value}> {children} </StoreContext.Provider>
    );
};

export default TaskListContextProvider;



