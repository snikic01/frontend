import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/pages/login-page/login-page.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'frontend';
}


@NgModule({
  declarations: [ 
  ],
  imports: [
    RegisterComponent,
    BrowserModule,
    FormsModule
  ],
})
export class AppModule { }
