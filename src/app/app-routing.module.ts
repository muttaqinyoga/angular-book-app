import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/components/category/category.component';
import { BooklistComponent } from './book/components/booklist/booklist.component';
import { BookformComponent } from './book/components/bookform/bookform.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard] 
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [authGuard] 
  },
  {
    path: 'book/list',
    component: BooklistComponent,
    canActivate: [authGuard] 
  },
  {
    path: 'book/create',
    component: BookformComponent,
    canActivate: [authGuard] 
  },
  {
    path: 'book/:id/edit',
    component: BookformComponent,
    canActivate: [authGuard]  
  },
  {
    path: 'login',
    component: AuthComponent
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
