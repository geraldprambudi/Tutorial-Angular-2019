import { Component, OnInit } from '@angular/core';
import { Foods } from '../foods'; // tambahkan ini import foods.ts
// import { LAPERS } from '../makanan-indo'; tambahkan ini dari makanan-indo.ts
import { FoodService } from '../food.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

	// lapers = LAPERS;  ambil variabel LAPERS dari makanan-indo.ts

	// tambahkan yang dibawah ini ya
	// selectedLaper: Foods;  Foods diambil dari foods.ts

	// let laper of lapers
	lapers: Foods[];

	// laper diambil dari *ngFor food.component.html
	// onSelect(laper: Foods): void {
	// 	this.selectedLaper = laper;
	// }


  constructor(private foodService: FoodService) { }

  ngOnInit() {
  	this.getFoods();
  }

  // getFoods(): void {
  // 	this.lapers = this.foodService.getFoods();
  // }

  // getFoods(): void {
  // 	this.foodService.getFoods().subscribe(lapers => this.lapers = lapers);
  // }

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
