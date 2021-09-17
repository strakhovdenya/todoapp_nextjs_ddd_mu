import {DbService, TodoListStorage} from "./interfaces";
import {removeTask} from "../domain/TudoList";
import {useTodoListStorage} from "../services/storeAdaptor";
import {useDbService} from "../services/dbAdaptor";
import {UniqueId} from "../types";

export function useRemoveOneTask() {

    const dbStorage:DbService = useDbService();
    const taskStorage: TodoListStorage = useTodoListStorage();

    async function removeOneTask(id: UniqueId) {

        const {tasks} = taskStorage;

        const updatedTasks = removeTask(tasks, id);

        await dbStorage.save(updatedTasks);

        taskStorage.saveTasks(updatedTasks);
    }

    return {removeOneTask}
}