import { Component } from '@angular/core';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { CertificatesSectionComponent } from './components/certificates-section/certificates-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { Certificate, Project } from './models/portfolio.models';

@Component({
  selector: 'app-root', standalone: true,
  imports: [HomeSectionComponent, ProjectsSectionComponent, CertificatesSectionComponent, ContactSectionComponent],
  templateUrl: './app.component.html', styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio-completo';
  menuOpen = false;
  contactEmail = 'milton.j.r.oliveira.1990@gmail.com';

  projects: Project[] = [
    { id: 1,
      title: 'Adubo Fácil',
      description: 'Landing page para uma plataforma de venda de adubos orgânicos e produtos agrícolas.',
      imageUrl: 'assets/adubofacil-logo-nova-fundo.jpg',
      link: 'https://adubofacil.vercel.app/',
      category: 'Pagina desenvolvida para venda de produtos agriculas, para um cliente. Desenvolvido com HTML,CSS,Angular,Bootstrap e Type script.', year: '2025',
      technologies: [
        { name: 'Java', iconUrl: 'assets/logo-java.png' },
        { name: 'Spring Boot', iconUrl: 'assets/logo-spring-boot.png' },
        { name: 'SQL Server', iconUrl: 'assets/logo-sql.png' },
        { name: 'Angular', iconUrl: 'assets/logo-angular.png' }
      ]
    },
    { id: 2,
      title: 'Sistema de Criptografia',
      description: 'Aplicação para codificação e decodificação de textos, utilizando algoritmos de criptografia.',
      imageUrl: 'assets/cripto.png',
      link: 'https://cripto-descripto.vercel.app/',
      category: 'Simula um sistema de criptografia e descriptografia de textos. DESENVOLVIDO em HTML CSS e Java script.', year: '2022',
      technologies: [
        { name: 'Java', iconUrl: 'assets/logo-java.png' },
        { name: 'C Sharp', iconUrl: 'assets/logo-csharp.png' },
        { name: 'SQL Server', iconUrl: 'assets/logo-sql.png' }
      ]
    },
    { id: 3,
      title: 'Jesus Revolution',
      description: 'Landing page com mensagens sujestões de filmes e outras coisas sobre Jesus.',
      imageUrl: 'assets/jesusrevolution.png',
      link: 'https://jesusrevolution.vercel.app/',
      category: 'Blog para falar um pouco a respeito de Jesus e a sua grande obra. Desenvolvido com Angular , HTML,CSS e Type script.(EM DESENVOLVIMENTO...)', year: '2024',
      technologies: [
        { name: 'Angular', iconUrl: 'assets/logo-angular.png' },
        { name: 'Bootstrap', iconUrl: 'assets/logo-bootstrap.png' }
      ]
    },
    { id: 4,
      title: 'The Secret Number',
      description: 'Jogo interativo construído com JavaScript.',
      imageUrl: 'assets/secretnumber.png',
      link: 'https://gamesn.vercel.app/',
      category: 'Tente adivinhar qual numero foi escolhido pela maquina recebendo dicas a cada tentativa. DESENVOLVIDO em HTML CSS e Java script.', year: '2022',
      technologies: [
        { name: 'Bootstrap', iconUrl: 'assets/logo-bootstrap.png' },
        { name: 'Angular', iconUrl: 'assets/logo-angular.png' }
      ]
    },
    { id: 5,
      title: 'Sorteio da Juh',
      description: 'Aplicação para sorteio de nomes.',
      imageUrl: 'assets/sorteiojuh.png',
      link: 'https://sorteiodajuh.vercel.app/',
      category: 'Aplicação para sorteio de nomes, com a possibilidade de adicionar e remover nomes. DESENVOLVIDO em HTML CSS e Java script.', year: '2023',
      technologies: [
        { name: 'Bootstrap', iconUrl: 'assets/logo-bootstrap.png' },
        { name: 'Angular', iconUrl: 'assets/logo-angular.png' }
      ]
    },
    { id: 6,
      title: 'Projetos Backend',
      description: 'Projetos desenvolvidos com Java e Spring Boot, C# e .Net.',
      imageUrl: 'assets/backendprojects.png',
      link: 'https://github.com/Milton-Rocha-Oliveira?tab=repositories',
      category: 'Projetos Backend', year: '2022- ...',
      technologies: [
        { name: 'Bootstrap', iconUrl: 'assets/logo-bootstrap.png' },
        { name: 'Angular', iconUrl: 'assets/logo-angular.png' }
      ]
    }
  ];

  certificates: Certificate[] = [
    { id: 1,
      title: 'Fullstack com Java e Angular 17+, com inicialização em sistemas de container com Docker.',
      issuer: 'Plataforma DIO',
      imageUrl: 'assets/javaAngular.jpg',
      date: '10/11/2024',
      certificateUrl: 'https://www.dio.me/certificate/YQP52FAT/share',
      technologies: [
        { name: 'Java', iconUrl: 'assets/logo-java.png' },
        { name: 'Spring Boot', iconUrl: 'assets/logo-spring-boot.png' },
        { name: 'Angular', iconUrl: 'assets/logo-angular.png' },
        { name: 'TypeScript', iconUrl: 'assets/logo-typescript.png' },
        { name: 'Docker', iconUrl: 'assets/logo-docker.png' }
      ]
    },
    { id: 2,
      title: 'Eco sistema Java + Spring Boot',
      issuer: 'Plataforma DIO',
      imageUrl: 'assets/BootCamp-Java.jpg',
      date: '07/07/2024',
      certificateUrl: 'https://www.dio.me/certificate/QHRMHCVW/share',
      technologies: [
        { name: 'Java', iconUrl: 'assets/logo-java.png' },
        { name: 'Spring Boot', iconUrl: 'assets/logo-spring-boot.png' }
      ]
    },
    { id: 3,
      title: 'Algoritmo e Lógica',
      issuer: 'Plataforma Udemy',
      imageUrl: 'assets/Algoritimo_e_logica.jpg',
      date: '29/05/2023',
      certificateUrl: 'https://www.udemy.com/certificate/UC-f7f4d2ce-5a0c-403f-be0b-938c9b55561b/',
      technologies: [
        { name: 'C Sharp', iconUrl: 'assets/logo-csharp.png' },
        { name: 'Java', iconUrl: 'assets/logo-java.png' },
        { name: 'TypeScript', iconUrl: 'assets/logo-typescript.png' }
      ]
    },
    { id: 4,
      title: 'Formação Primeiros passos em Front-end com HTML, CSS e JavaScript',
      issuer: 'Plataforma Alura',
      imageUrl: 'assets/front-end.jpg',
      date: '11/02/2024',
      certificateUrl: 'https://cursos.alura.com.br/degree/certificate/f9da112d-f7a0-4776-9430-6e9867ef1021',
      technologies: [

      ]
    },
    { id: 5,
      title: 'Cyber security',
      issuer: 'Plataforma Udemy',
      imageUrl: 'assets/cyber securyti.jpg',
      date: '18/01/2023',
      certificateUrl: 'https://www.udemy.com/certificate/UC-80b9db10-e0a0-4411-9e77-339f68d87fe1/',
      technologies: [

      ]
    },
    { id: 6,
      title: 'Ferramentas de inteligencia artuificial',
      issuer: 'Plataforma Udemy',
      imageUrl: 'assets/certificado-udemy-Ia.jpg',
      date: '18/01/2023',
      certificateUrl: 'https://www.udemy.com/certificate/UC-b31e0140-cf05-4cd2-9112-c52726fb7df9/',
      technologies: [

      ]
    },
    { id: 7,
      title: 'Formação End to End Engineering. Desenvolvimento de aplicações com C#, SQL e Docker',
      issuer: 'Plataforma Dio',
      imageUrl: 'assets/certificateWex.png',
      date: '31/07/2025',
      certificateUrl: 'https://www.dio.me/certificate/6MG9MF5S/share',
      technologies: [
        { name: 'C Sharp', iconUrl: 'assets/logo-csharp.png' },
        { name: 'sql', iconUrl: 'assets/logo-sql.png' },
        { name: 'Docker', iconUrl: 'assets/logo-docker.png' },
      ]
    },
    { id: 8,
      title: 'Formação Eco sistema .Net',
      issuer: 'Plataforma Dio',
      imageUrl: 'assets/certificado_net.png',
      date: '31/08/2025',
      certificateUrl: 'https://www.dio.me/certificate/4KZBRRCI/share',
      technologies: [
        { name: 'C Sharp', iconUrl: 'assets/logo-csharp.png' },
      ]
    }
  ];

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void { this.menuOpen = false; }
}
