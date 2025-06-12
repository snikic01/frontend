// src/app/components/pages/user-info/user-info.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { Food } from '../../../shared/models/Food';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
  imports: [ CommonModule ],
})
export class UserInfoComponent implements OnInit {
  //prikaz ulogovanog korisnika
  korisnik = JSON.parse(localStorage.getItem('user') || '{}');
  orders: Food[] = [];

  constructor(private cartService: CartService,
  private authService: AuthService,
  private router: Router) {}

  ngOnInit() {
    //dobijanje korisnika iz local storage-a
    const userData = localStorage.getItem('currentUser');
  if (userData) {
    this.korisnik = JSON.parse(userData);
    this.orders = this.korisnik.porudzbine || [];
  } else{
    this.korisnik = null;

  this.orders = this.cartService.getItems();
  }
}

logout(){
  this.authService.logout();         //  brise currentUser iz localStorage
  this.cartService.clearCart();      //  cisti korpu
  this.router.navigateByUrl('/login-page');  // navigira na login
}

}