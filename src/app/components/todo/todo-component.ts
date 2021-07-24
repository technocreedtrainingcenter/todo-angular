import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-todo',
    templateUrl: './todo-component.html'
})
export class TODOComponent {
    @Input() todoText: any;

    @Input() index: number = 0;

    @Output() deleteTodoEvent = new EventEmitter();
    
    deleteTodo() {
        this.deleteTodoEvent.emit(this.index);
    }

}