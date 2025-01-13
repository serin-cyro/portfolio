import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProjectsComponent } from "../projects/projects.component"; 

@Component({
  selector: 'app-home',
  imports: [MatTooltipModule, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
