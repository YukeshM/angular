import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aug12books';

  @Output() displayEvent = new EventEmitter<{Isbn: string, Title: string, Description: string, Author: string, Price: number}>();

  bookList: {Isbn: any, Title: string, Description: string, Author: string, Price: number}[]=[
    {
    Isbn : '123456789',
    Title : "agni siragugal",
    Description : "About A.P.J.Abdul kalam",
    Author : "arun dhivari",
    Price : 350
    },
    {
    Isbn : '234567890',
    Title : "ninaivo oru paravai",
    Description: "Na muththukumar lifestory",
    Author: "Na. Muththukumar",
    Price: 180
    }
  ];


  onAddBook(book: {isbn: any, title: string, description: string, author: string, price: any}){
    this.bookList.push({
      Isbn: book.isbn,
      Title: book.title,
      Description: book.description,
      Author: book.author,
      Price: book.price
    })
    localStorage.setItem("book",JSON.stringify(book));
  }

  onUpdateBookWithOldList(Book: {
    id: number,
    description: string,
    price: number
  }){
    
this.bookList[Book.id].Description = Book.description;
this.bookList[Book.id].Price = Book.price;

localStorage.setItem("book",JSON.stringify(this.bookList));
  }
}
