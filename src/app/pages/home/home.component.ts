import { Component } from '@angular/core';
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { CertificatesComponent } from "../../components/certificates/certificates.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, CertificatesComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
