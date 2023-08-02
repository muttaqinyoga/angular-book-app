import { Injectable } from '@angular/core';
import { ICategory } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BookList: Array<Ibook>;
  constructor() {
    this.BookList = new Array<Ibook>();
   }

  

  getBookList(){
    return this.BookList;
  }

  addBook(book: Ibook){
    if(this.BookList.length === 0){
      const id = new Date().getTime();
      book.id = id;
    } else{
      const lastId = this.BookList[this.BookList.length - 1].id;
      book.id = lastId + 1;
    }
    this.BookList.push(book);
  }
  getBookById(id:number){
    return this.BookList.find(b => b.id === id);
  }
  updateBook(id:number, book:Ibook){
    const idx = this.BookList.findIndex(b => b.id === id);
    if(idx != -1){
      this.BookList[idx] = book;
    }
  }

  deleteBook(id:number){
    const idx = this.BookList.findIndex(b => b.id === id);
    if(idx != -1){
      this.BookList.splice(idx, 1);
    }
  }
}

export interface Ibook{
  id:number,
  name:string,
  author:string,
  publisher:string,
  categories:Array<ICategory>
}