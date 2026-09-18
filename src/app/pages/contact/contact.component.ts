import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I18nService, Locale } from '../../services/i18n.service';

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
export class ContactComponent implements OnInit {
  profileImage = 'assets/images/perfil_foto.jpeg';
  locale: Locale = 'pt';

  constructor(
    private route: ActivatedRoute,
    public i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.locale = this.i18n.getLocale(params.get('lang'));
    });
  }

  get t() {
    return this.i18n.contact[this.locale];
  }

  get contactLinks(): ContactLink[] {
    return [
      {
        label: this.t.emailLabel,
        value: 'tiagorodrigues@alunos.utfpr.edu.br',
        href: 'mailto:tiagorodrigues@alunos.utfpr.edu.br',
        description: this.t.emailDescription,
        icon: '✉️',
      },
      {
        label: this.t.linkedInLabel,
        value: 'tiagorodriguesde',
        href: 'https://www.linkedin.com/in/tiagorodriguesde/',
        description: this.t.linkedInDescription,
        icon: '🔗',
      },
      {
        label: this.t.githubLabel,
        value: 'TiagoRodrigues-GitH',
        href: 'https://github.com/TiagoRodrigues-GitH',
        description: this.t.githubDescription,
        icon: '🐙',
      },
    ];
  }
}
