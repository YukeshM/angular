import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aug12Class';

  bookList: {isbn: number, title: string, description: string, author: string, price: number, url: any}[] = [{
    isbn : 123456789,
    title : "agni siragugal",
    description : "About A.P.J.Abdul kalam",
    author : "arun dhivari",
    price : 350,
    url: ""
  },
{
  isbn : 234567890,
  title : "ninaivo oru paravai",
  description: "Na muththukumar lifestory",
  author: "Na. Muththukumar",
  price: 180,
  url: ""
}]

  onAddBook(Book: {isbn: number, title: string, description: string, author: string, price: number}){
    this.bookList.push({isbn:Book.isbn, title:Book.title, description: Book.description, author: Book.author, price: Book.price, url: ""})
    localStorage.setItem("book",JSON.stringify(Book));
    //or // localStorage.setItem("book",JSON.stringify(this.BookList));
    
  }

  onBookUpdate(book: {id: number,url: any, description: string, price: number})
  {
    this.bookList[book.id].description = book.description;
    this.bookList[book.id].price = book.price;
    this.bookList[book.id].url = book.url;
    localStorage.setItem('books',JSON.stringify(this.bookList));
  }

}
