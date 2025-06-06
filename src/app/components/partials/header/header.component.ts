import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { LoginComponent } from '../../pages/login-page/login-page.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {

  //Implementacija Brojača u headeru
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((cart: Cart) => {
      this.cartItemCount = cart.totalCount;
    });
  }
}
