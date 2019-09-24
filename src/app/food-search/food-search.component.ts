import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 import { Foods } from '../foods';
 import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {

	lapers$: Observable<Foods[]>;
	private searchTerm = new Subject<string>();

  constructor(private foodService: FoodService) { }

  search(term: string): void {
  	this.searchTerm.next(term);
  }

  ngOnInit(): void {
  	this.lapers$ = this.searchTerm.pipe(
  		debounceTime(300),
  		distinctUntilChanged(),
  		switchMap((term: string) => this.foodService.searchFoods(term)),
  	);
  }

}
