import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

    getAll(): Food[] {
      return sample_foods;
    }
  
getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
//Dodavanje Tag metode
getAllTags(): Tag[] {
  return sample_tags;
}

//Proverava da li je Tag INKLUDOVAN
getAllFoodsByTag(tag:string):Food[] {
  return tag == 'All'?
  this.getAll():
  this.getAll().filter(food => food.tags?.includes(tag));

}
//Dodavanje metode za stranicu odabrane hrane
getFoodById(foodId: string): Food {
  return this.getAll().find(food => food.id == foodId) ?? new Food();
}

}
