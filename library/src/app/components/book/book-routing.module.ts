import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BooksComponent },
  { path: 'addBook', component: AddBookComponent, canActivate: [AuthGuard] },
  {
    path: 'editBook/:bookId',
    component: EditBookComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
