import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainComponent } from './components/main/main/main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
