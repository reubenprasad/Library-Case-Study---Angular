import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddbookComponent } from './addbook/addbook.component';
import {AuthComponent } from './auth/auth.component';
import {AuthdescComponent} from './authdesc/authdesc.component';
import {BookdescComponent } from './bookdesc/bookdesc.component';
import {BooksComponent } from './books/books.component';
import {EditbookComponent } from './editbook/editbook.component';
import {SignupComponent } from './signup/signup.component';
import {UpdatebookComponent } from './updatebook/updatebook.component';
import {LoginComponent } from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component'
const routes: Routes = [
  { path : "",component:LoginComponent},
  { path : "signup",component:SignupComponent},
  {path:"navigation", component: NavigationComponent, children:[
   
    {path:"book", component: BooksComponent},
    {path:"auth", component: AuthComponent},
    {path:"addbook", component: AddbookComponent },
    {path:"updatebook/editbook/:bid", component: EditbookComponent},
    {path:"updatebook", component: UpdatebookComponent},
    {path:"book/sb/:id", component: BookdescComponent},
    {path:"auth/sa/:id", component: AuthdescComponent}
  ]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
