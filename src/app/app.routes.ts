import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CertificatesPageComponent } from './pages/certificates-page/certificates-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'certificates' , component: CertificatesPageComponent },
    { path : 'projects', component: ProjectsPageComponent},
];
 
