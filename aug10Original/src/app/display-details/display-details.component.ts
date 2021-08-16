import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  tasks:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onPush(task: any){
    this.tasks.push(task);
    localStorage.setItem("todoList",JSON.stringify(this.tasks));
    
  }

  onDone(index: number){
    this.tasks.forEach( task =>{
      if(this.tasks[index] == task){
        this.tasks[index] = `✔  ${task}`
      }
    })

  }

  onRemove(index: number){
    this.tasks.splice(index, 1)
    localStorage.setItem("todoList",JSON.stringify(this.tasks))
  }
}
