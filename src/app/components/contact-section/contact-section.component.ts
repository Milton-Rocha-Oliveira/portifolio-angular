import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({selector:'app-contact-section', standalone:true, imports:[FormsModule], templateUrl:'./contact-section.component.html', styleUrl:'./contact-section.component.css'})
export class ContactSectionComponent {
  @Input({ required: true }) email = '';
  message = '';
  send(): void { if (this.message.trim()) { window.location.href = `mailto:${this.email}?subject=Contato do Portfólio&body=${encodeURIComponent(this.message)}`; this.message = ''; } }
}
