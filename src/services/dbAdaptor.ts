import {DbService} from "../application/interfaces";

import {TodoList} from "../domain/TudoList";


export function useDbService(): DbService {
    return {
        save: async function (tasks: TodoList) {
            const url = `${process.env.API_URL}/api/tasks`;


            try {
                const response = await fetch(url, {
                    method: 'POST', // или 'PUT'
                    body: JSON.stringify(tasks),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const json = await response.json();
                if(json){
                    return true;
                }

                return false;
            } catch (error) {
                console.error('Ошибка:', error);
                return false;
            }
        },

        get: async function (): Promise<TodoList> {
            const response = await fetch(`${process.env.API_URL}/api/tasks`)
            const taskProp: TodoList = await response.json();
            return taskProp;
        }
    }
}