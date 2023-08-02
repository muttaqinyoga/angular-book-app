import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogcategoryComponent } from './components/dialogcategory/dialogcategory.component';

@NgModule({
  declarations: [
    CategoryComponent,
    DialogcategoryComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,MatSortModule, MatTableModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatDialogModule
  ]
})
export class CategoryModule { }
