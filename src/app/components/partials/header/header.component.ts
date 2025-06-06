import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { LoginComponent } from '../../pages/login-page/login-page.component';
import { NgIf } from '@angular/common';
import { AuthGuard } from '../../../guards/auth.guard';
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
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((cart: Cart) => {
      this.cartItemCount = cart.totalCount;
      // Proverava da li je korisnik prijavljen i ažurira userLoggedIn
      this.userLoggedIn = this.authService.isLoggedIn();
    });
  }
}
