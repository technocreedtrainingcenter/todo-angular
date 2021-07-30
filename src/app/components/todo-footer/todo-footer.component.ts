import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html'
})
export class TODOFooter {

    constructor(
        public todoService: TodoService
    ) {}

    totalTodoCount: number = this.todoService.todoList.length;

    onClear() {
        alert('Clear')
        this.todoService.todoList = [];
    }
}