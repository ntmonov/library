import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, VerifyComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthModule {}
