import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CategoryService, ICategory } from 'src/app/services/category.service';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogcategoryComponent } from '../dialogcategory/dialogcategory.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, AfterViewInit {
    constructor(private categoryService: CategoryService, public dialog: MatDialog){
      this.categoryModel = {
            id: 0,
            name: ''
        }
        this.dataSource = new MatTableDataSource();
    }

    @ViewChild(MatPaginator)
    paginator: MatPaginator

    @ViewChild(MatSort)
    sort: MatSort
    
    @Input()
    dataSource: MatTableDataSource<ICategory>
    
    categoryModel : ICategory
    displayedColumns = ['id', 'name', 'options'];

    ngOnInit(): void {
        this.dataSource.data = this.categoryService.getCategoryList();
    }
    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    searchCategories(event: Event){
      const searchVal = (event.target as HTMLInputElement).value;
      this.dataSource.filter = searchVal.trim().toLowerCase();
      if(this.dataSource.paginator){
        this.dataSource.paginator.firstPage();
      }
    }

    openDialogCategory(action?:string, id?:number, name?: string){
      if(action != 'Create'){
        this.categoryModel.name = name;
        this.categoryModel.id = id;
      }
      const dialogRef = this.dialog.open(DialogcategoryComponent, {
        data:{
          action: action,
          data: this.categoryModel
        },
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.categoryModel = result.data;
          if(action === 'Create'){
            this.categoryService.addCategory(this.categoryModel);
          }
          else if(action === 'Edit') {
            this.categoryService.updateCategory(id, this.categoryModel);
          } else if(action === 'Delete'){
            this.categoryService.deleteCategory(id);
          }
          this.dataSource.data = this.categoryService.getCategoryList();
          this.categoryModel  = {
            id: 0,
            name: ''
          }
        }
      })
    }
}

