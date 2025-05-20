import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  foods:Food[] = [];

  constructor(private foodService:FoodService) {
    this.foods = this.foodService.getAll();
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  // Add any additional methods or properties as needed

}

@NgModule({
  declarations: [
    // Component declarations
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }