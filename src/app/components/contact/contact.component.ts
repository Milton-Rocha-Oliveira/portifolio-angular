import { Component, Input } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @Input()
  email:string = "ENVIAR E-MAIL."
}
