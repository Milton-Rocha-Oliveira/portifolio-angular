import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
   foto:string = "/assets/Milton...R.jpg"
    download(){
       alert("CLICOU NO BOTÃO");
    }
    ngOnInit() {
      ScrollReveal().reveal('app-about-me', {
        duration: 3000,
        origin: 'top',
        distance: '1rem'
      });
    }
} 
