import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';


const routes: Routes = [
	// nama path bebas localhost:4200/food
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: FoodDetailComponent },
	{ path: 'food', component: FoodComponent },
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
