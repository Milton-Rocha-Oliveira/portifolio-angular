import { Component  , Input} from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  @Input()
  imgProject:string = ""
  @Input()
  textProject:string = ""
  @Input()
  linkProject:string = ""
  @Input()
  projectSummary:string = ""
}
