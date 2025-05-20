import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];{
      }
    });
  }

  ngOnInit(): void {
  }

  // Method to handle search action
  search(term:string): void {
    if(term)
      this.router.navigateByUrl('/search/' + term);
  }

//  onSearch(): void {
//    console.log('Searching for:', this.searchTerm);
//  }

}
