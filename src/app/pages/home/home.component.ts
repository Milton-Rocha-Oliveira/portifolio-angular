import { Component, OnInit} from '@angular/core';
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ContactComponent } from '../../components/contact/contact.component';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit() {
    ScrollReveal().reveal('app-about-me', {
      duration: 3000,
      origin: 'top',
      distance: '10rem'
    });
  }
}
