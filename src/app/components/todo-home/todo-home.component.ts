import { Component } from "@angular/core";

@Component({
    selector: 'app-todo-home',
    templateUrl: './todo-home.component.html',
    styleUrls: ['./todo.component.css']
})
export class TODOHomeComponent {
    todo = '';

    todoList: any = [];

    e =2;

    addTodo() {
        if (this.todo) {
            this.todoList.push(this.todo)
            this.todo = '';
        }
    }

    submit() {
        console.log('button clicked')
    }

    deleteTodo(index: number) {
        this.todoList = this.todoList.filter((item: string, i: number) => i !== index )
    }

    onDeleteTodo(index: any) {
        alert(index)
    }

    clearAll() {
        this.todoList = [];
    }
}