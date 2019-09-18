import { Injectable } from '@angular/core';
// import foods & makanan-indo
import { Foods } from './foods';
import { LAPERS } from './makanan-indo';

import { MessageService } from './message.service'; 

// import rxjs observable
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private messageService: MessageService) { }

  getFoods(): Observable<Foods[]> {
  	// Akan mengirim pesan jika mengambil data makanan
  	this.messageService.add('FoodService: fetched foods');
  	return of(LAPERS);
  }
}
