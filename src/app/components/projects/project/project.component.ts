import { Component  , Input, OnInit} from '@angular/core';
import ScrollReveal from 'scrollreveal';

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

  ngOnInit() {
    ScrollReveal().reveal('app-project', {
      duration: 2000,
      origin: 'bottom',
      distance: '0.8rem'
    });
  }
}