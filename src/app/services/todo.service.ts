import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
    todos:any[] = [
        {id: 1, text: "Todo item1", completed: false},
        {id: 2, text: "Todo item2", completed: false},
        {id: 3, text: "Todo item3", completed: false},
    ];
    
    constructor() { }

}