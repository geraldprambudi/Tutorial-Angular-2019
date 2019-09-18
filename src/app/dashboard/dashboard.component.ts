import { Component, OnInit } from '@angular/core';
import { Foods } from '../foods'; // tambahkan ini import foods.ts
import { FoodService } from '../food.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	lapers: Foods[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
  	this.getFoods();
  }

  getFoods(): void {
  	this.foodService.getFoods()
  		.subscribe(lapers => this.lapers = lapers.slice(1, 5));
  }

}
