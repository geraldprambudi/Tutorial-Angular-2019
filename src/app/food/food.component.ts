import { Component, OnInit } from '@angular/core';
import { Foods } from '../foods'; // tambahkan ini import foods.ts

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

	/**** tambahkan data nya disini. laper yang bakal kita panggil variabel
	      untuk di food.component.html
	*****/ 
	laper: Foods = {
		id: 1,
		name: 'nasi uduk'
	};
	/**** 
		end data
	*****/ 

	
  constructor() { }

  ngOnInit() {
  }

}
