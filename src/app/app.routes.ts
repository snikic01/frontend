import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginComponent } from './components/pages/login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';
import { Cart } from './shared/models/Cart';
import { LoadingAnimationComponent } from './components/pages/loading-animation/loading-animation.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserInfoComponent } from './components/pages/user-info/user-info.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    //ruta za searchbar komponentu
    {path: 'search/:searchTerm', component: HomeComponent},
    //ruta za tag komponentu
    {path: 'tag/:tag', component: HomeComponent},
    //ruta za stranicu odabrane hrane
    {path: 'food/:id', component: FoodPageComponent},
    //ruta za cart-page komponentu
    {path: 'cart-page', component: CartPageComponent, canActivate: [AuthGuard]},
    //ruta za login komponentu
    {path: 'login-page', component: LoginComponent},
    //ruta za login i logout animaciju
    { path: 'animacija', component: LoadingAnimationComponent },
    //ruta za registraciju
    { path: `register`, component: RegisterComponent},
    //ruta za home komponentu, koja je zaštićena AuthGuard-om
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] }
    { path: 'profil', component: UserInfoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
