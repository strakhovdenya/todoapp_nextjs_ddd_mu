import {DbService, TodoListStorage} from "../application/interfaces";
import {useStore} from "./storeContext";
import {TodoList} from "../domain/TudoList";


export function useDbService(): DbService {
    return {
        save(tasks: TodoList) {
            return new Promise(resolve => {
                setTimeout(() => resolve(true), 500)
            })
        }
    }
}