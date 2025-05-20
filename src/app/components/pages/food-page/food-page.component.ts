import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-food-page',
  imports: [NgFor, RouterLink, NgIf, CurrencyPipe],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  constructor(activatetRoute:ActivatedRoute, foodService:FoodService) {
    activatetRoute.params.subscribe((params) => {
      if(params.id) {
        this.food = foodService.getFoodById(params.id);
      }
    });
  }

  ngOnInit(): void {
  }

}
