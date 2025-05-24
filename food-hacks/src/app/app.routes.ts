import { Routes } from '@angular/router';
import { FoodHackListComponent } from './components/food-hack-list/food-hack-list.component';
import { FoodHackDetailComponent } from './components/food-hack-detail/food-hack-detail.component';
import { FoodHackFormComponent } from './components/food-hack-form/food-hack-form.component';

export const routes: Routes = [
  { path: 'hacks', component: FoodHackListComponent },
  { path: 'hacks/:id', component: FoodHackDetailComponent },
  { path: 'add-hack', component: FoodHackFormComponent },
  { path: 'edit-hack/:id', component: FoodHackFormComponent },
  { path: '', redirectTo: '/hacks', pathMatch: 'full' },
  // Optionally, a wildcard route for 404s, though not explicitly requested
  // { path: '**', component: PageNotFoundComponent }, 
];
