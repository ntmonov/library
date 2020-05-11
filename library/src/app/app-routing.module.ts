import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainComponent } from './components/main/main/main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BooksComponent } from './components/book/books.component';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { AuthGuard } from './guard/auth.guard';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'addBook', component: AddBookComponent, canActivate: [AuthGuard] },
  {
    path: 'editBook/:bookId',
    component: EditBookComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
