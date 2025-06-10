import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sample_users } from '../../../../data';
import { User } from '../../../../User';

@Component({
  standalone: true,
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  imports: [CommonModule]
})
export class UserInfoComponent {
  korisnik = User;

}
