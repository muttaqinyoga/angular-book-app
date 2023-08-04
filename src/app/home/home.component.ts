import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  total = {
    book: 0,
    category: 0
  }
  constructor(private categoryService: CategoryService, bookService: BookService){
    this.total.category = categoryService.getCategoryList().length;
    this.total.book = bookService.getBookList().length;
  }

}
