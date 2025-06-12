// src/app/components/pages/user-info/user-info.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sample_users } from '../../../../data';
import { CartService } from '../../../services/cart.service';
import { Food } from '../../../shared/models/Food';

@Component({
  standalone: true,
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
  imports: [ CommonModule ],
})
export class UserInfoComponent implements OnInit {
  korisnik = sample_users[0];
  orders: Food[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.orders = this.cartService.getItems();
  }
}

