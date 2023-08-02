import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/components/category/category.component';
import { BooklistComponent } from './book/components/booklist/booklist.component';
import { BookformComponent } from './book/components/bookform/bookform.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'book/list',
    component: BooklistComponent
  },
  {
    path: 'book/create',
    component: BookformComponent
  },
  {
    path: 'book/:id/edit',
    component: BookformComponent 
  },
  { path: '**', 
    redirectTo: '' 
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
