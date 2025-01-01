import { Component } from '@angular/core';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NgOptimizedImage } from '@angular/common';
import { CertificatesPageComponent } from "./pages/certificates-page/certificates-page.component";
import { ProjectsPageComponent } from "./pages/projects-page/projects-page.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CertificatesComponent } from "./components/certificates/certificates.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent , HomeComponent, NgOptimizedImage, CertificatesPageComponent, ProjectsPageComponent, ContactComponent, CertificatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio-completo';
}
