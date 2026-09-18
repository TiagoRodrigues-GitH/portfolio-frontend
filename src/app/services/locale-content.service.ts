import { Injectable } from '@angular/core';
import { I18nService, Locale } from './i18n.service';

export interface ProjectLocaleText {
  title: string;
  summary: string;
  role: string;
  details: string;
}

@Injectable({ providedIn: 'root' })
export class LocaleContentService {
  constructor(private i18n: I18nService) {}

  getProjectContent(locale: Locale): Record<string, ProjectLocaleText> {
    const projectText: Record<string, ProjectLocaleText> = {
      pt: {
        title: 'Sistema de gerenciamento de veículos',
        summary: 'Interface para gerenciamento de veículos, cadastros e operação diária.',
        role: 'Painel administrativo e acompanhamento',
        details: 'Sistema de manejo de veículos desenvolvido para gerenciar cadastros, status e operações do dia a dia, com foco em eficiência e rastreabilidade.',
      },
      en: {
        title: 'Vehicle management system',
        summary: 'Interface for vehicle management, registration and daily operations.',
        role: 'Administrative dashboard and tracking',
        details: 'Vehicle management system designed to handle registrations, status tracking and daily operations with a focus on efficiency and traceability.',
      },
      de: {
        title: 'Fahrzeugverwaltung',
        summary: 'Anwendung für Fahrzeugverwaltung, Erfassung und tägliche Abläufe.',
        role: 'Administration und Prozessüberblick',
        details: 'Ein System zur Verwaltung von Fahrzeugen und Statusinformationen. Im Mittelpunkt stehen effiziente Abläufe und eine lückenlose Nachvollziehbarkeit.',
      },
    };

    return projectText;
  }

  getProjectsLocale(locale: Locale): Array<{ label: string; value: string }> {
    return [
      { label: 'portfolio', value: locale === 'en' ? 'Portfolio' : locale === 'de' ? 'Portfolio' : 'Portfólio' },
      { label: 'developed', value: locale === 'en' ? 'Selected projects' : locale === 'de' ? 'Ausgewählte Projekte' : 'Projetos selecionados' },
      { label: 'role', value: locale === 'en' ? 'Role' : locale === 'de' ? 'Rolle' : 'Função' },
      { label: 'stack', value: 'Stack' },
      { label: 'openImage', value: locale === 'en' ? 'Open image of' : locale === 'de' ? 'Bild öffnen:' : 'Abrir imagem de' },
      { label: 'next', value: locale === 'en' ? 'Next' : locale === 'de' ? 'Weiter' : 'Próxima' },
      { label: 'prev', value: locale === 'en' ? 'Previous' : locale === 'de' ? 'Zurück' : 'Anterior' },
    ];
  }
}
