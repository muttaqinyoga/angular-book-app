import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookformComponent } from './components/bookform/bookform.component';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from '../app-routing.module';
import { BookdialogComponent } from './components/bookdialog/bookdialog.component';
@NgModule({
  declarations: [
    BooklistComponent,
    BookformComponent,
    BookdialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatPaginatorModule,MatSortModule, MatTableModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatDialogModule, MatSnackBarModule
  ],
})
export class BookModule { }
