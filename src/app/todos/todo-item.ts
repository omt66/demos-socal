import { Component, OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.html',
    styleUrls: ['todo-item.css'],
    inputs:["todo"],
    outputs: ['deleted']
})
export class TodoItemComponent implements OnInit {
    todo;
    editable = false;
    status;
    deleted = new EventEmitter();

    constructor() { }

    ngOnInit() { 
        console.log("Hello TodoItemComponent");
        this.status = this.todo.completed ? "completed": "active";
    }

    handleClick() {
        this.todo.completed = !this.todo.completed;
        console.log("Completed? " + this.todo.completed);
        this.status = this.todo.completed ? "completed": "active";
    }

    toggleEdit(btn) {
        this.editable = !this.editable;

        if (this.editable) {
            btn.innerHTML = "Done";
        }
        else {
            btn.innerHTML = "Edit";
        }
    }

    deleteTodo() {
        this.deleted.emit({});
    }
}