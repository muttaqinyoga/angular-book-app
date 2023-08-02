import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookService, Ibook } from 'src/app/services/book.service';
import { BookdialogComponent } from '../bookdialog/bookdialog.component';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit, AfterViewInit {

  constructor(private bookService: BookService, public dialog: MatDialog, private snackbar: MatSnackBar){
    this.dataSource = new MatTableDataSource();
  }

  displayedColumns: string[] = ['name', 'author', 'categories', 'publisher', 'options'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator

  @ViewChild(MatSort)
  sort: MatSort

  dataSource: MatTableDataSource<Ibook>


  ngOnInit(): void {
    this.dataSource.data = this.bookService.getBookList();
  }
  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  searchBooks(event: Event){
      const searchVal = (event.target as HTMLInputElement).value;
      this.dataSource.filter = searchVal.trim().toLowerCase();
      if(this.dataSource.paginator){
        this.dataSource.paginator.firstPage();
      }
  }
  openBookDialog(id?:number, name?:string){
    const dialogRef = this.dialog.open(BookdialogComponent, {
      data: {
        id: id,
        name: name
      }
    });
    dialogRef.afterClosed().subscribe(result=> {
      if(result){
        this.bookService.deleteBook(result.id);
        this.dataSource.data = this.bookService.getBookList();
        this.snackbar.open(`${result.name} has been deleted`, 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 2000,
        })
      }
    })
  }
}
