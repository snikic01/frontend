import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from "../../partials/title/title.component";
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-cart-page',
  imports: [TitleComponent, RouterLink, NgIf, NgFor, CurrencyPipe, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  cart!: Cart;
  constructor(private cartService: CartService,
  private router: Router) {
    //f-cija za update cart-a iznad
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  removeFromCart(CartItem: CartItem) {
    this.cartService.removeFromCart(CartItem.food.id);
  }

  changeQuantity(CartItem: CartItem, quantityInString: string) {
    const qantity = parseInt(quantityInString);
    this.cartService.ChangeQuantity(CartItem.food.id, qantity);
}

/*
//Nakon klika na check-out dugme
proceedToCheckout() {
  const userData = localStorage.getItem('currentUser');
  const cartItems = this.cartService.getItems();

  if (userData && cartItems.length > 0) {
    const user = JSON.parse(userData);
    
    // Dodaj stavke kao porudžbine korisniku
    user.porudzbine = cartItems.map(item => ({
      naziv: item.food.name,
      kolicina: item.quantity,
      status: 'Na čekanju'
    }));

    // Sačuvaj ažuriranog korisnika u localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Isprazni korpu
    this.cartService.clearCart();

    // Redirektuj na user info stranicu
    this.router.navigate(['/user-info']);
    console.log('CHECKOUT click!', this.cartService.getItems());
  }
}
  */

// metoda 2 za checkout
checkout() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

  if (currentUser) {
    const cartItems = this.cartService.getItems();

    // Dodajemo porudzbine na postojeće
    if (!currentUser.porudzbine) {
      currentUser.porudzbine = [];
    }

    // Dodajemo sve stavke iz korpe u porudzbine
    cartItems.forEach(item => {
      currentUser.porudzbine.push({
        naziv: item.food.name,
        status: 'Na čekanju',
        kolicina: item.quantity,
      });
    });

    // Ažuriraj localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Isprazni korpu
    this.cartService.clearCart();

    // Navigiraj na user-info stranicu
    this.router.navigate(['/user-info']);
  }
}


}