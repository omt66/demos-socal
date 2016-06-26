import { Component, OnInit } from '@angular/core';
import {TodoItemComponent} from './todo-item';
import {TodoService} from '../services/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.html',
    directives: [TodoItemComponent],
    providers: [TodoService]
})
export class TodosComponent implements OnInit {
    title = "Todos (using Angular 2)";
    todos = [];
    // todos:any[] = [
    //     {id: 1, text: "Todo item1", completed: false},
    //     {id: 2, text: "Todo item2", completed: false},
    //     {id: 3, text: "Todo item3", completed: false},
    // ];

    constructor(public todoService: TodoService) { 
        this.todos = todoService.todos;
    }

    ngOnInit() {
        console.log("Hello TodosComponent");
        console.log("Todos: " + JSON.stringify(this.todos));
        
    }

    addTodo(nt) {
        console.log("OK : I will add the new todo " + nt.value);
        this.todos.push({
            id: Math.floor(1000*Math.random()),
            text: nt.value,
            completed: false
        });

        nt.value = "";
    }

    getActiveCount() {
        return this.todos
            .map(todo => {
                return !todo.completed ? 1: 0;
            }) 
            .reduce((total, number) => {
                return total + number;
            }, 0);
    }

    getCompletedCount() {
        return this.todos
            .map(todo => {
                return todo.completed ? 1: 0;
            }) 
            .reduce((total, number) => {
                return total + number;
            }, 0);
    }

    deleteTodo(todo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}