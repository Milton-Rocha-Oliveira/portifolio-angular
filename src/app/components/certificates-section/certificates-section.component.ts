import { Component, Input } from '@angular/core';
import { Certificate } from '../../models/portfolio.models';
import { CertificateCardComponent } from './certificate-card/certificate-card.component';

@Component({selector:'app-certificates-section',
  standalone:true, imports:[CertificateCardComponent],
  templateUrl:'./certificates-section.component.html',
  styleUrl:'./certificates-section.component.css'})
export class CertificatesSectionComponent {
  @Input({ required: true }) certificates: Certificate[] = [];
}
