import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl(''),
    confirmPass: new FormControl(''),
  });

  register() {
    console.log(this.registerForm.value);
  }
}
