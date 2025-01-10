import { Component, Input } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {

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
