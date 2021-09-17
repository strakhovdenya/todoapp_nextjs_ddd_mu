import {EditTaskStorage, TodoListStorage} from "../application/interfaces";
import { useStore } from "./storeContext";


export function useTodoListStorage(): TodoListStorage {
    return <TodoListStorage>useStore();
}

export function useEditTaskStorage(): EditTaskStorage {
    return <EditTaskStorage>useStore();
}