// servis za autentifikaciju korisnika
import { Injectable } from '@angular/core';
import { User } from '../../User';
import { sample_users } from '../../data'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = sample_users;
  private loggedInUser: User | null = null;

  // Ključ za čuvanje trenutnog korisnika u localStorage
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
  
  register(name: string, email: string, password: string): boolean {
    if (this.users.find(u => u.email === email)) return false;

    const newUser: User = {
      name, email, password,
      id: '',
      porudzbine: ''
    };
    this.users.push(newUser);
    this.loggedInUser = newUser; // odmah ga uloguj
    return true;
  }

  //Uslou za prijavu korisnika za user-info stranicu
  ifUserLogin(email: string, password: string): boolean {
  const user = sample_users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));  // ✅ Sačuvaj ulogovanog
    return true;
  }
  return false;
}

  ifUserLogout(){
    localStorage.removeItem('user');
  }

//Uslov za brisanje korisnika nakon logout-a

  get currentUser(): User | null {
    return this.loggedInUser;
  }



}
    


