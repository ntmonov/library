import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    email: new FormControl(''),
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

  register() {
    delete this.registerForm['confirmPass'];
    this.authService.register(this.registerForm.value).subscribe(
      (user) => console.log(user),
      (err) => {
        console.log(err);
        this.errorMessage = err.error.message;
      }
    );
  }
}
