import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html'
})
export class TODOFooter {
    @Input() totalTodoCount: number = 0;

    @Output() clearAllTodo = new EventEmitter();

    onClear() {
        alert('Clear')
        this.clearAllTodo.emit();
    }
}