import { Component } from '@angular/core';
import { FoodHack } from '../../food-hack';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-hack-list',
  standalone: true, // Ensure component is standalone
  imports: [CommonModule], // Import CommonModule for *ngFor etc.
  templateUrl: './food-hack-list.component.html',
  styleUrl: './food-hack-list.component.scss'
})
export class FoodHackListComponent {
  foodHacks: FoodHack[] = [
    {
      id: 1,
      title: 'Keep Apples Fresh',
      description: 'Store apples with a damp paper towel to keep them fresh longer.',
      ingredients: ['Apples', 'Paper Towel', 'Water'],
      instructions: ['Wet paper towel.', 'Wrap apples with damp paper towel.'],
      preparationTime: 5,
      cookingTime: 0
    },
    {
      id: 2,
      title: 'Easy Peel Garlic',
      description: 'Microwave garlic cloves for 15 seconds for easy peeling.',
      ingredients: ['Garlic Cloves'],
      instructions: ['Place garlic cloves in microwave.', 'Microwave for 15 seconds.', 'Peel garlic easily.'],
      preparationTime: 1,
      cookingTime: 0.25 // 15 seconds
    }
  ];
}
