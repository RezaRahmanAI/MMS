import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './personal-info.component.html',
})
export class PersonalInfoComponent {}
