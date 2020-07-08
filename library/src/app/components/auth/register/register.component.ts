import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  registerObs$;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnDestroy(): void {
    if (this.registerObs$) {
      this.registerObs$.unsubscribe();
    }
  }

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
    this.registerObs$ = this.authService
      .register(this.registerForm.value)
      .subscribe((user) => {
        this.authService.saveSession(user);
        sessionStorage.setItem('total', '0');
        this.toastr.success('Register successfull');
        this.router.navigateByUrl('/');
      });
  }
}
