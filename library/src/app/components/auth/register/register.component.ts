import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]),
    address: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    confirmPass: new FormControl(''),
  });

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPass() {
    return this.registerForm.get('confirmPass');
  }

  get email() {
    return this.registerForm.get('email');
  }

  register() {
    delete this.registerForm['confirmPass'];
    this.authService.register(this.registerForm.value).subscribe(
      (user) => {
        this.authService.saveSession(user);
        this.router.navigateByUrl('/');
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
