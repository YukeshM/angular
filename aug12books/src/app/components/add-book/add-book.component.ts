import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  isb =""
  titl = ""
  descriptio =""
  autho = ""
  pric =""

  @Output() addBookEvent:any = new EventEmitter<{isbn: any, title: string, description: string, author: string, price: any }>();
  constructor() { }

  ngOnInit(): void {
  }
  onSave(Isbn: string, Title: string, Description: string, Author: string, Price: any){
  this.isb="";
  this.titl = "";
  this.descriptio ="";
  this.autho= "";
  this.pric="";

this.addBookEvent.emit({Isbn,Title, Description, Author,Price});

  }

}
