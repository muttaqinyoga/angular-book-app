import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICategory } from 'src/app/services/category.service';

@Component({
  selector: 'app-dialogcategory',
  templateUrl: './dialogcategory.component.html',
  styleUrls: ['./dialogcategory.component.css']
})
export class DialogcategoryComponent {
  
  constructor(public dialogRef: MatDialogRef<DialogcategoryComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: DataDialogCategory){}
  
  
  
  onNoClick(){
      this.dialogRef.close();
    }
}

export interface DataDialogCategory{
  action: string,
  data: ICategory
}