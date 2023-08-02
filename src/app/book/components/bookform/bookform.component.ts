import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService, Ibook } from 'src/app/services/book.service';
import { CategoryService, ICategory } from 'src/app/services/category.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent  implements OnInit {
  
  constructor(private bookService: BookService, private categoryService: CategoryService, private router: Router, private activeRoute: ActivatedRoute, private snackbar: MatSnackBar){
  }

  title = 'Create New Book';

  formBook: FormGroup;
  categoryList:  Array<ICategory>;
  bookEdit: Ibook;

  ngOnInit(): void {
    
    const paramId = this.activeRoute.snapshot.paramMap.get('id');
    this.formBook = new FormGroup({
        id: new FormControl(),
        name: new FormControl(''),
        author: new FormControl(''),
        categories: new FormControl([]),
        publisher: new FormControl('')
    });
    if(paramId){
      this.bookEdit = this.bookService.getBookById(parseInt(paramId));
      if(this.bookEdit){
        this.title= 'Edit Book';
        this.id.setValue(this.bookEdit.id);
        this.name.setValue(this.bookEdit.name);
        this.author.setValue(this.bookEdit.author);
        this.categories.setValue(this.bookEdit.categories);
        this.publisher.setValue(this.bookEdit.publisher);
      } else{
        this.router.navigate(['/book/list']);
      }
    }
    this.categoryList = this.categoryService.getCategoryList();
  }

  get id(){
    return this.formBook.get('id');
  }
  get name(){
    return this.formBook.get('name')
  }
  get author(){
    return this.formBook.get('author')
  }
  get categories(){
    return this.formBook.get('categories')
  }
  get publisher(){
    return this.formBook.get('publisher')
  }
  submitBookForm(){
    const bookId = this.id.value;
    if(bookId){
      this.bookService.updateBook(bookId, this.formBook.value);
    } else {
      this.bookService.addBook(this.formBook.value);
    }
    this.router.navigate(['/book/list']);
    this.snackbar.open(`${bookId ? 'Book has been updated' : 'New book has been created'}`, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
    })
  }
}
