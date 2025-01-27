import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any;
  constructor(private projectService: ProjectService) { }
  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      (projects:any) => {
        this.projects = projects;
        console.log(projects);
      }
    );
  }
}
