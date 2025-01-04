import { Component , Input, OnInit} from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { CertificateComponent } from './certificate/certificate.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CertificateComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  @Input()
  imgCertificate:string = ""
  @Input()
  textCerficate:string = ""
  @Input()
  linkCertificate:string = ""

  ngOnInit() {
    ScrollReveal().reveal('app-certificates', {
      duration: 4000,
      origin: 'left',
      distance: '30rem'
    });
  }
}
