import { Component } from '@angular/core';
import { CertificatesComponent } from '../../components/certificates/certificates.component';

@Component({
  selector: 'app-certificates-page',
  standalone: true,
  imports: [CertificatesComponent],
  templateUrl: './certificates-page.component.html',
  styleUrl: './certificates-page.component.css'
})
export class CertificatesPageComponent {

}
