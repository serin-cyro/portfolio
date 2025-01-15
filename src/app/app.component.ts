import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,NotFoundComponent,ProjectsComponent,MatTooltipModule,MatCardModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
