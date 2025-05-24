import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodHackListComponent } from './components/food-hack-list/food-hack-list.component'; // Import the new component

@Component({
  selector: 'app-root',
  standalone: true, // Add standalone: true
  imports: [RouterOutlet, FoodHackListComponent], // Add FoodHackListComponent to imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'food-hacks';
}
