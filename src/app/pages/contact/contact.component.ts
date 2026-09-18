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

  get pageBackground(): string {
    return 'radial-gradient(circle at top right, rgba(96, 165, 250, 0.18), transparent 28%), radial-gradient(circle at bottom left, rgba(147, 197, 253, 0.14), transparent 24%), linear-gradient(rgba(237, 246, 255, 0.84), rgba(223, 238, 255, 0.88)), url("assets/images/image_contact.png")';
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
