// src/app/app.component.ts
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { I18nService, Locale } from './services/i18n.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-frontend';
  menuOpen = false;
  isScrolled = false;
  currentLanguage: Locale = 'pt';

  constructor(
    private router: Router,
    public i18n: I18nService,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlTree = this.router.parseUrl(event.urlAfterRedirects);
        this.currentLanguage = this.i18n.getLocale(urlTree.queryParams['lang'] ?? null);
        this.menuOpen = false;
        if (typeof window !== 'undefined') {
          setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
        }
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setLanguage(language: Locale) {
    this.currentLanguage = language;
    const currentPath = this.router.url.split('?')[0] || '/';
    this.router.navigateByUrl(`${currentPath}?lang=${language}`);
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
    }
  }

  get homeLabel(): string {
    return this.i18n.nav[this.currentLanguage].home;
  }

  get projectsLabel(): string {
    return this.i18n.nav[this.currentLanguage].projects;
  }

  get contactLabel(): string {
    return this.i18n.nav[this.currentLanguage].contact;
  }

  get aboutLabel(): string {
    return this.i18n.nav[this.currentLanguage].about;
  }

  get footerTitle(): string {
    return this.currentLanguage === 'en' ? 'My Portfolio' : this.currentLanguage === 'de' ? 'Mein Portfolio' : 'Meu Portfólio';
  }

  get footerDescription(): string {
    return this.currentLanguage === 'en'
      ? 'Building thoughtful solutions with technology and dedication.'
      : this.currentLanguage === 'de'
        ? 'Durchdachte Lösungen mit Technologie und Engagement entwickeln.'
        : 'Desenvolvendo soluções com tecnologia e dedicação.';
  }

  get quickLinksLabel(): string {
    return this.currentLanguage === 'en' ? 'Quick Links' : this.currentLanguage === 'de' ? 'Schnellzugriff' : 'Links Rápidos';
  }

  get adminLabel(): string {
    return this.currentLanguage === 'en' ? 'Admin' : this.currentLanguage === 'de' ? 'Admin' : 'Admin';
  }

  get footerContactLabel(): string {
    return this.currentLanguage === 'en' ? 'Contact' : this.currentLanguage === 'de' ? 'Kontakt' : 'Contato';
  }

  get copyrightText(): string {
    return this.currentLanguage === 'en' ? 'All rights reserved.' : this.currentLanguage === 'de' ? 'Alle Rechte vorbehalten.' : 'Todos os direitos reservados.';
  }

  isLanguageActive(language: Locale): boolean {
    return this.currentLanguage === language;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
