import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CertificatesPageComponent } from './pages/certificates-page/certificates-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'certificate', component: CertificatesPageComponent},
    { path:'project', component:ProjectsPageComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}