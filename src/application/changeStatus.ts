import {DbService, TodoListStorage} from "./interfaces";
import {editTask, findItem} from "../domain/TudoList";
import {useTodoListStorage} from "../services/storeAdaptor";
import {useDbService} from "../services/dbAdaptor";

import {TodoItem} from "../domain/TudoItem";
import {UniqueId} from "../types";

export function useChangeStatusTask() {

    const dbStorage: DbService = useDbService();
    const taskStorage: TodoListStorage = useTodoListStorage();

    async function changeStatusTask(status: boolean, id: UniqueId) {

        const {tasks} = taskStorage;

        const oldTask: TodoItem = findItem(tasks, id);

        const itemForEdit: TodoItem = {...oldTask, status: status}

        const updatedTasks = editTask(tasks, itemForEdit);

        await dbStorage.save(updatedTasks);

        taskStorage.saveTasks(updatedTasks);
    }

    return {changeStatusTask}
}