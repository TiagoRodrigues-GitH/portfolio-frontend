import { Component } from '@angular/core';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  profileImage = '/assets/images/perfil_foto.jpeg';

  contactLinks: ContactLink[] = [
    {
      label: 'Email',
      value: 'tiagorodrigues@alunos.utfpr.edu.br',
      href: 'mailto:tiagorodrigues@alunos.utfpr.edu.br',
      description: 'Envie uma mensagem para propostas, dúvidas ou oportunidades.',
      icon: '✉️',
    },
    {
      label: 'LinkedIn',
      value: 'tiagorodriguesde',
      href: 'https://www.linkedin.com/in/tiagorodriguesde/',
      description: 'Veja meu perfil profissional e experiência em desenvolvimento.',
      icon: '🔗',
    },
    {
      label: 'GitHub',
      value: 'TiagoRodrigues-GitH',
      href: 'https://github.com/TiagoRodrigues-GitH',
      description: 'Confira meus repositórios, projetos e estudos de código.',
      icon: '🐙',
    },
  ];
}
