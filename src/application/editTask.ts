import {DbService, EditTaskStorage, TodoListStorage} from "./interfaces";
import {editTask, findItem} from "../domain/TudoList";
import {useEditTaskStorage, useTodoListStorage} from "../services/storeAdaptor";
import {useDbService} from "../services/dbAdaptor";
import {DateTimeString, TodoItemContent, UniqueId} from "../types";
import {TodoItem} from "../domain/TudoItem";


export function useEditOneTask() {

    const dbStorage: DbService = useDbService();
    const taskStorage: TodoListStorage = useTodoListStorage();
    const editTaskStorage: EditTaskStorage = useEditTaskStorage();

    async function editOneTask(id: UniqueId, newContent: TodoItemContent, newDueDate:DateTimeString) {

        const {tasks} = taskStorage;
        const {saveEditItem} = editTaskStorage;

        const oldEdit:TodoItem = findItem(tasks, id);
        const itemForEdit:TodoItem = {...oldEdit, content: newContent, due_date:newDueDate};
        const updatedTasks = editTask(tasks, itemForEdit);

        await dbStorage.save(updatedTasks);

        taskStorage.saveTasks(updatedTasks);

        saveEditItem(null);
    }

    return {editOneTask}
}