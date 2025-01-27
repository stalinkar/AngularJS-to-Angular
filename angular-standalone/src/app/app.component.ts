import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-standalone';
}
