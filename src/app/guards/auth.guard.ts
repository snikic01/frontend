import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  //Proverava da li je korisnik prijavljen, u slucaju
  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['./login-page']);
      return false;
    }
    return true;
  }
}

