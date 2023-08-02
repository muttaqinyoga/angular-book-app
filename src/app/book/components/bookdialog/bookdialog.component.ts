import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ibook } from 'src/app/services/book.service';

@Component({
  selector: 'app-bookdialog',
  templateUrl: './bookdialog.component.html',
  styleUrls: ['./bookdialog.component.css']
})
export class BookdialogComponent {
  constructor(public dialogRef: MatDialogRef<BookdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: Ibook
    ){}
    onNoClick(){
      this.dialogRef.close();
    }
}
