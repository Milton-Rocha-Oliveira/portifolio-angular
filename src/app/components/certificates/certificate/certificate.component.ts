import { Component, Input } from '@angular/core';

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
}
