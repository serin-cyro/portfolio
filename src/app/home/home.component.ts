import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProjectsComponent } from "../projects/projects.component";
import { ExperianceComponent } from "../experiance/experiance.component"; 

@Component({
  selector: 'app-home',
  imports: [MatTooltipModule, ProjectsComponent, ExperianceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
