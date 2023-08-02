import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private CategoryList : Array<ICategory>;
  
  constructor() {
    this.CategoryList = new Array<ICategory>();
    const id = new Date().getTime(); 
      this.CategoryList.push({
        id: id,
        name: 'Novels'
      }, {
        id: id +1,
        name: 'Self Developments'
      },{
        id: id +2,
        name: 'Computers'
      });
  }
      

  

  getCategoryList(){
    return this.CategoryList;
  }

  addCategory(category:ICategory){
    if(this.CategoryList.length === 0){
      const id = new Date().getTime();
      category.id = id
    } else {
      const lastId = this.CategoryList[this.CategoryList.length - 1].id;
      category.id = lastId + 1;
    }
    this.CategoryList.push(category);
  }

  updateCategory(id:number, category:ICategory){
    const idx = this.CategoryList.findIndex(c => c.id === id);
    if(idx != -1){
      this.CategoryList[idx] = category;
    }
  }
  deleteCategory(id:number){
    const idx = this.CategoryList.findIndex(c => c.id === id);
    if(idx != -1){
      this.CategoryList.splice(idx, 1);
    }
  }
}

export interface ICategory{
  id: number,
  name: string
}
