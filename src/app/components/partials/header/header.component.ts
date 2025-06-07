import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {

  //Implementacija Brojača u headeru
  cartItemCount: number = 0;
  userLoggedIn = false;

  constructor(
    private cartService: CartService,
    //Definisanje AuthService-a
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Inicijalizacija brojača korpe i proveravanje da li je korisnik prijavljen
    this.authService.loggedIn$.subscribe(status => {
    this.userLoggedIn = status;});

    //this.userLoggedIn = this.authService.isLoggedIn();
    this.cartService.getCartObservable().subscribe((cart: Cart) => {
      this.cartItemCount = cart.totalCount;
      // Proverava da li je korisnik prijavljen i ažurira userLoggedIn
      this.userLoggedIn = this.authService.isLoggedIn();
    });
  }

  // Metoda za navigaciju na pocetnu stranicu
  logout(): void {
    this.router.navigate(['/animacija']).then(() => {
      setTimeout(() => {
    this.authService.logout();
    this.userLoggedIn = false;
    this.router.navigate(['/']);
    //Navigira na početnu stranicu nakon odjave
       }, 2500);  //vreme animacije
      });
  }
  
}
