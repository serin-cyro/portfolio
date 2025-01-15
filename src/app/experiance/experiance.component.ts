import { Component,} from '@angular/core';
import { JOBS,Job } from './experiance-content.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiance',
  imports: [MatCardModule, MatIconModule,CommonModule],
  templateUrl: './experiance.component.html',
  styleUrl: './experiance.component.css'
})
export class ExperianceComponent {
jobs: Job[] = JOBS
}
