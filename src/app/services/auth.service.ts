// servis za autentifikaciju korisnika
import { Injectable } from '@angular/core';
import { User } from '../../User';
import { sample_users } from '../../data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserKey = 'currentUser';

  // BehaviorSubject za trackovanje trenutnog stanja prijave korisnika
  private loggedIn = new BehaviorSubject<boolean>(this.getCurrentUser() !== null);
  public loggedIn$ = this.loggedIn.asObservable();

  login(email: string, password: string): boolean {
    const user = sample_users.find(u => u.email.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase() && u.password === password);
    
    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      this.loggedIn.next(true);
      return true;
    }
      return false;
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
    this.loggedIn.next(false);
  }
  isLoggedIn(): boolean {
    return localStorage.getItem(this.currentUserKey) !== null;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(this.currentUserKey) || 'null') as User | null;
  }
}
    


