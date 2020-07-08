import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AdminGuard } from 'src/app/guard/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BooksComponent },
  { path: 'addBook', component: AddBookComponent, canActivate: [AdminGuard] },
  {
    path: 'editBook/:bookId',
    component: EditBookComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
