import {TodoItem} from "./TudoItem";
import {UniqueId} from "../types";

export type TodoList = {
    todos: TodoItem[];
};

export const addTask = (tasks: TodoList, task: TodoItem): TodoList => {
    return {...tasks, todos: [...tasks.todos, task]}
}

export const removeTask = (tasks: TodoList, id: UniqueId): TodoList => {
    const updatedTasks = tasks.todos.filter(task => task.id !== id);

    return {...tasks, todos: updatedTasks};
}

export const clearList = (tasks: TodoList): TodoList => {

    return {...tasks, todos: []}
}

export const findItem = (tasks: TodoList, id: UniqueId): TodoItem => {

    return tasks.todos.find(task => task.id === id);
}

export const editTask = (tasks:TodoList, newItem:TodoItem):TodoList => {
    const updatedTasks = tasks.todos.map(task => {
        return task.id === newItem.id ? newItem: task
    })

    return {...tasks, todos: updatedTasks};
}