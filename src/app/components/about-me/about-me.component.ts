import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

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
}
