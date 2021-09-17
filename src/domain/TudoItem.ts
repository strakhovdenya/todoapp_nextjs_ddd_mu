import {DateTimeString, TodoItemContent, UniqueId} from "../types";

export type TodoItem = {
    id: UniqueId;
    content: TodoItemContent;
    status: boolean;
    due_date: DateTimeString;
};