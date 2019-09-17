// tambahkan INPUT
import { Component, OnInit, Input } from '@angular/core';
// Tambahkan Foods dari foods
import { Foods } from '../foods';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  	// Tambahkan ini
	@Input() laper: Foods;

  constructor() { }

  ngOnInit() {
  }

}
