import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  todo = "";

  @Output() eventCreated = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  onAddTask(){
  this.eventCreated.emit(this.todo);
    }

  
}
