import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainComponent } from './components/main/main/main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { VerifyComponent } from './components/auth/verify/verify.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify/:id/:code', component: VerifyComponent },
  {
    path: 'books',
    loadChildren: () =>
      import('./components/book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./components/cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
