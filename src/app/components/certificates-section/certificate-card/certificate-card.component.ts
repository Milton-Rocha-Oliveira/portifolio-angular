import { Component, Input } from '@angular/core';
import { Certificate } from '../../../models/portfolio.models';

@Component({selector:'app-certificate-card',
  standalone:true, templateUrl:'./certificate-card.component.html',
  styleUrl:'./certificate-card.component.css'})
export class CertificateCardComponent {
  @Input({ required: true }) certificate!: Certificate; }
