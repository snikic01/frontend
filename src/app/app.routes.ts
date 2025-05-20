import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    //ruta za searchbar komponentu
    {path: 'search/:searchTerm', component: HomeComponent},
    //ruta za tag komponentu
    {path: 'tag/:tag', component: HomeComponent},
    //ruta za stranicu odabrane hrane
    {path: 'food/:id', component: FoodPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule { }