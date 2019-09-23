import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Foods } from './foods';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const lapers = [
			{ id: 10, name: 'nasi uduk' },
			{ id: 11, name: 'nasi goreng' },
			{ id: 12, name: 'semur jengkol' },
			{ id: 13, name: 'soto betawi' },
			{ id: 14, name: 'sop buntung' },
			{ id: 15, name: 'sop iga' },
			{ id: 16, name: 'bakwan' },
			{ id: 17, name: 'gudeg' },
			{ id: 18, name: 'mie ayam' },
			{ id: 19, name: 'mie goreng' },
			{ id: 20, name: 'telor dadar' }
		];
		return {lapers};
	}

	genId(lapers: Foods[]): number {
		return lapers.length > 0 ? Math.max(...lapers.map(laper => laper.id)) + 1: 11;
	}

  constructor() { }
}
