import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl(''),
    confirmPass: new FormControl(''),
  });

  register() {
    delete this.registerForm['confirmPass'];
    this.authService
      .register(this.registerForm.value)
      .subscribe((user) => console.log(user));
  }
}
