import {DbService, TodoListStorage} from "./interfaces";
import {addTask} from "../domain/TudoList";
import {useTodoListStorage} from "../services/storeAdaptor";
import {useDbService} from "../services/dbAdaptor";
import {DateTimeString, TodoItemContent} from "../types";
import {v4 as uuidv4} from 'uuid';
import {TodoItem} from "../domain/TudoItem";

export function useAddNewTask() {

    const dbStorage: DbService = useDbService();
    const taskStorage: TodoListStorage = useTodoListStorage();

    async function addNewTask(newContent: TodoItemContent, dueDate: DateTimeString) {

        const {tasks} = taskStorage;

        const newTask: TodoItem = {
            id: uuidv4(),
            content: newContent,
            due_date: dueDate,
            status: false
        }

        const updatedTasks = addTask(tasks, newTask);

        await dbStorage.save(updatedTasks);

        taskStorage.saveTasks(updatedTasks);
    }

    return {addNewTask}
}