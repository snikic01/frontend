import { Component, NgModule } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  imports: [FormsModule, NgIf, RouterLink]
}) 

export class LoginComponent{
  email = '';
  password = '';
  error = '';
  

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const success = this.authService.login(this.email, this.password);
  if (success) {
    // Prikaz animacije 2 sekunde
    this.router.navigate(['/animacija']).then(() => {
      setTimeout(() => {
        this.router.navigate(['/']); // nakon animacije vrati na početnu
      }, 2000);
    });
  } else {
    this.error = 'Pogrešan email ili lozinka';

      }
    }
  }
