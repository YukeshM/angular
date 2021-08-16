import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos : Todo[];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content : 'first todo',
        completed : false
      },
      {
        content : 'second-todo',
        completed : false
      }
      
    ]
  }

  
  toggleDone(id){
    this.todos.map((value, index ) => {
      if(index == id) value.completed = !value.completed;
      return value;
    })
  }

//remove method
deleteTodo (id: number) {
  this.todos = this.todos.filter((value, index) => index !== id);
}

 //add method
 addTodo(){
  this.todos.push({
    content : this.inputTodo,
    completed : false
  })
  this.inputTodo = "";
}
}
