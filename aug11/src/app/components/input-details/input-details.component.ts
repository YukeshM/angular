import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {

  @Output() event = new EventEmitter<{name:string,status: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onSave(studentName: string, studentStatus: string){
    this.event.emit({
      name: studentName,
      status: studentStatus
    })
    console.log("from on save method");
  }
}
