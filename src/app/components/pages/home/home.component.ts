import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../../partials/search/search.component";

@Component({
  selector: 'app-home',
  imports: [RouterModule, RouterLink, NgFor, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  foods:Food[] = [];

  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) 
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
       else if (params.tag) 
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
       else 
        this.foods = this.foodService.getAll();
    })
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