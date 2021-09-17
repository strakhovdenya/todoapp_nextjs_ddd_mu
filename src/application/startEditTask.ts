import {EditTaskStorage, TodoListStorage} from "./interfaces";
import {findItem} from "../domain/TudoList";
import {useEditTaskStorage, useTodoListStorage} from "../services/storeAdaptor";

import {TodoItem} from "../domain/TudoItem";
import {UniqueId} from "../types";


export function useStartEditTask() {

    const taskStorage: TodoListStorage = useTodoListStorage();
    const editTaskStorage: EditTaskStorage = useEditTaskStorage();

    async function startEditTask(id: UniqueId) {

        const {tasks} = taskStorage;
        const {saveEditItem} = editTaskStorage;

        const itemForEdit: TodoItem = findItem(tasks, id);

        saveEditItem(itemForEdit);
    }

    return {startEditTask}
}