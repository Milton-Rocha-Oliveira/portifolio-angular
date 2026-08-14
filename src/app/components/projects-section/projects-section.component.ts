import { Component, Input } from '@angular/core';
import { Project } from '../../models/portfolio.models';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({selector:'app-projects-section', standalone:true, imports:[ProjectCardComponent], templateUrl:'./projects-section.component.html', styleUrl:'./projects-section.component.css'})
export class ProjectsSectionComponent { @Input({ required: true }) projects: Project[] = []; }
