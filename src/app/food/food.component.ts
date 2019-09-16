import { Component, OnInit } from '@angular/core';
import { Foods } from '../foods'; // tambahkan ini import foods.ts
import { LAPERS } from '../makanan-indo'; // tambahkan ini dari makanan-indo.ts


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

	lapers = LAPERS; // ambil variabel LAPERS dari makanan-indo.ts

	// tambahkan yang dibawah ini ya
	selectedLaper: Foods; // Foods diambil dari foods.ts

	// laper diambil dari *ngFor food.component.html
	onSelect(laper: Foods): void {
		this.selectedLaper = laper;
	}

  constructor() { }

  ngOnInit() {
  }

}
