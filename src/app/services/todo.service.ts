import { Subject } from "rxjs";

export class TodoService {
    constructor() {

    }

    todoList: string[] = [];

    deleteTodo = new Subject();

}