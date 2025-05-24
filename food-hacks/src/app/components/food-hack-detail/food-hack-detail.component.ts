import { Component, Input } from '@angular/core';
import { FoodHack } from '../../food-hack';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-food-hack-detail',
  standalone: true, // Make component standalone
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './food-hack-detail.component.html',
  styleUrl: './food-hack-detail.component.scss'
})
export class FoodHackDetailComponent {
  @Input() foodHack: FoodHack | undefined;
}
