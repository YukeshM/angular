import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  {

  // creating a book class and using here
  isbn='';  
  title ='';
  description ='';
  author = '';
  price = '';



  @Output() book: any = new EventEmitter<{isbn: string,title: string,describtion: string, author: string, price: number}>();


  constructor() { }


  onAddBook(isbn: any, title: string, description: string, author: string, price: any)
  {
    this.isbn='';
    this.title='';
    this.description='';
    this.author='';
    this.price='';

    this.book.emit({isbn,title,description,author,price});
  }
}
