import { Component , Input } from '@angular/core';
import { ProjectComponent } from "./project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  @Input()
  imgProject:string = ""
  @Input()
  textProject:string = ""
  @Input()
  linkProject:string = ""
  @Input()
  projectSummary:string = ""
}
