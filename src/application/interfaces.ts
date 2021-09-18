import {Email, UserName} from "../types";
import {User} from "../domain/User";
import {TodoItem} from "../domain/TudoItem";
import {TodoList} from "../domain/TudoList";

export interface AuthenticationService {
    auth(name: UserName, email: Email): Promise<User>;
}

export interface DbService {
    save(tasks: TodoList): Promise<boolean>;
    get(): Promise<TodoList>;
}

export interface TodoListStorage {
    tasks: TodoList;

    saveTasks(tasks: TodoList): void;
}

export interface EditTaskStorage {
    taskForEdit: TodoItem | null;

    saveEditItem(editTask: TodoItem | null): void;
}