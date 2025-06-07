import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  imports: [FormsModule, NgIf]
}) 

export class LoginComponent{
  email = '';
  password = '';
  error = '';
  

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/']); // vrati na početnu stranicu nakon uspešne prijave
    } else {
      this.error = 'Pogrešan email ili šifra.';
    }
  }

  onLogin(): void {
  if (this.authService.login(this.email, this.password)) {
    this.router.navigate(['/login-animation']).then(() => {
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2500);
    });
  } else {
    this.error = 'Pogrešan email ili šifra';
  }
}

}
