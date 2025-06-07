import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  name = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const registered = this.authService.register(this.name, this.email, this.password);
    if (registered) {
      this.router.navigateByUrl('/');
    } else {
      alert('Korisnik već postoji.');
    }
  }
}
