import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

  public id = 0;
  newDescription: any;
  newPrice: any;

  @Input() Books:any;

  @Output() updateEvent: any = new EventEmitter<{id:any, Description: string, Price: any }>();
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(id: number){
this.newDescription = this.Books[id].Description;
this.id = id;
  }


  onUpdateBook(id: number, newDescription: string, price: any){
this.updateEvent.emit({id, newDescription, price});
  }
}
