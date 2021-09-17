import {DbService, TodoListStorage} from "./interfaces";
import {clearList} from "../domain/TudoList";
import {useTodoListStorage} from "../services/storeAdaptor";
import {useDbService} from "../services/dbAdaptor";
import {UniqueId} from "../types";

export function useClearTasks() {

    const dbStorage: DbService = useDbService();
    const taskStorage: TodoListStorage = useTodoListStorage();

    async function clearTasks() {

        const {tasks} = taskStorage;

        const updatedTasks = clearList(tasks);

        await dbStorage.save(updatedTasks);

        taskStorage.saveTasks(updatedTasks);
    }

    return {clearTasks}
}