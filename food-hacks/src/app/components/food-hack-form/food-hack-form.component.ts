import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FoodHack } from '../../food-hack';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-food-hack-form',
  standalone: true, // Make component standalone
  imports: [ReactiveFormsModule, CommonModule], // Add ReactiveFormsModule and CommonModule
  templateUrl: './food-hack-form.component.html',
  styleUrl: './food-hack-form.component.scss'
})
export class FoodHackFormComponent implements OnInit {
  foodHackForm!: FormGroup; // Use definite assignment assertion

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.foodHackForm = this.fb.group({
      id: [null], // Or some default value, can be hidden or disabled for new hacks
      title: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.fb.array([]),
      instructions: this.fb.array([]),
      preparationTime: [0, [Validators.required, Validators.min(0)]],
      cookingTime: [0, [Validators.required, Validators.min(0)]]
    });
  }

  // Methods to get FormArray controls for ingredients
  get ingredients(): FormArray {
    return this.foodHackForm.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(this.fb.control('', Validators.required));
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  // Methods to get FormArray controls for instructions
  get instructions(): FormArray {
    return this.foodHackForm.get('instructions') as FormArray;
  }

  addInstruction(): void {
    this.instructions.push(this.fb.control('', Validators.required));
  }

  removeInstruction(index: number): void {
    this.instructions.removeAt(index);
  }

  onSubmit(): void {
    // For now, just log the form value. Data submission will be handled later.
    if (this.foodHackForm.valid) {
      console.log(this.foodHackForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
