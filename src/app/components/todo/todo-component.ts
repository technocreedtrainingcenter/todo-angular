import { Component, Input, EventEmitter, Output } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
    selector: 'app-todo',
    templateUrl: './todo-component.html'
})
export class TODOComponent {
    constructor(
        private todoService: TodoService
    ) {

    }

    @Input() todoText: any;

    @Input() index: number = 0;

    // @Output() deleteTodoEvent = new EventEmitter();
    
    deleteTodo() {
        debugger
        this.todoService.deleteTodo.next(this.index);
        // this.deleteTodoEvent.emit(this.index);
    }

}