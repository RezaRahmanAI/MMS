import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-meal-guide',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './meal-guide.component.html',
})
export class MealGuideComponent {}
