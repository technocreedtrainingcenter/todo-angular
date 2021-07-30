import { Component } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
    selector: 'app-todo-home',
    templateUrl: './todo-home.component.html',
    styleUrls: ['./todo.component.css']
})
export class TODOHomeComponent {

    constructor(
        public todoServce: TodoService
    ) {
        this.watchDeleteTodo();
       
    }

    watchDeleteTodo() {
        this.todoServce.deleteTodo.subscribe((response: any) => {
            this.todoServce.todoList = this.todoServce.todoList.filter((item: string, i: number) => i !== response )
            console.log('delete todo', response)
            debugger
        })
    }

    todo = '';

    // todoList: any = [];

    e = 2;

    addTodo() {
        if (this.todo) {
            this.todoServce.todoList.push(this.todo)
            this.todo = '';
        }
    }

    submit() {
        console.log('button clicked')
    }

    // deleteTodo(index: number) {
        
    // }

    // onDeleteTodo(index: any) {
    //     this.deleteTodo(index)
    // }

    // clearAll() {
    //     this.todoServce.todoList = [];
    // }
}