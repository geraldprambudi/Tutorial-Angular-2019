import { Component, OnInit } from '@angular/core';
import { Foods } from '../foods'; // tambahkan ini import foods.ts
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

	lapers: Foods[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
  	this.getFoods();
  }

  getFoods(): void {
    this.foodService.getFoods().subscribe(lapers => this.lapers = lapers);
  };

  // add click eventf
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.foodService.addFood({ name } as Foods).subscribe(laper => {
      this.lapers.push(laper);
    });
  }

  delete(laper: Foods): void {
    this.lapers = this.lapers.filter(h => h !== laper);
    this.foodService.deleteFood(laper).subscribe();
  }

}
