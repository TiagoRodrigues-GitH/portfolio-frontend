import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type LanguageKey = 'pt' | 'en' | 'de';

interface TranslationSection {
  heading: string;
  body: string[];
}

interface TranslationPage {
  lang: LanguageKey;
  title: string;
  intro: string;
  sections: TranslationSection[];
}

@Component({
  selector: 'app-language-page',
  standalone: false,
  templateUrl: './language-page.component.html',
  styleUrls: ['./language-page.component.css'],
})
export class LanguagePageComponent {
  language: LanguageKey = 'pt';

  readonly translations: Record<LanguageKey, TranslationPage> = {
    pt: {
      lang: 'pt',
      title: 'Tradução em português',
      intro: 'Conteúdo adaptado para apresentar a visão do portfólio em português, com foco em automação, mobilidade e inovação tecnológica.',
      sections: [
        {
          heading: 'Sobre o portfólio',
          body: [
            'Este portfólio reúne experiências em desenvolvimento de sistemas, arquitetura digital e soluções para mobilidade inteligente.',
            'A apresentação reflete uma abordagem técnica aplicada ao contexto automotivo, com foco em sistemas ADAS, integração de dados e IA.',
          ],
        },
        {
          heading: 'Áreas de atuação',
          body: [
            'Desenvolvimento de sistemas e interfaces para automação, análise de dados e mobilidade conectada.',
            'Implementação de soluções para front-end, back-end e modelos de inteligência artificial orientados a desempenho e confiabilidade.',
          ],
        },
      ],
    },
    en: {
      lang: 'en',
      title: 'English translation',
      intro: 'Content adapted to present the portfolio in English, focusing on automation, mobility, and technology-driven innovation.',
      sections: [
        {
          heading: 'About the portfolio',
          body: [
            'This portfolio brings together experience in system development, digital architecture, and solutions for intelligent mobility.',
            'The presentation reflects a technical approach applied to the automotive context, with emphasis on ADAS systems, data integration, and AI.',
          ],
        },
        {
          heading: 'Areas of work',
          body: [
            'Development of systems and interfaces for automation, data analysis, and connected mobility.',
            'Implementation of front-end, back-end, and artificial intelligence model solutions focused on performance and reliability.',
          ],
        },
      ],
    },
    de: {
      lang: 'de',
      title: 'Deutsche Übersetzung',
      intro: 'Der Inhalt wurde für die deutsche Präsentation angepasst und fokussiert sich auf Automatisierung, Mobilität und technologische Innovation.',
      sections: [
        {
          heading: 'Über das Portfolio',
          body: [
            'Dieses Portfolio vereint Erfahrungen in Systementwicklung, digitaler Architektur und Lösungen für intelligente Mobilität.',
            'Die Präsentation spiegelt einen technischen Ansatz für den Automobilkontext wider, mit Schwerpunkt auf ADAS-Systemen, Datenintegration und KI.',
          ],
        },
        {
          heading: 'Tätigkeitsbereiche',
          body: [
            'Entwicklung von Systemen und Oberflächen für Automatisierung, Datenanalyse und vernetzte Mobilität.',
            'Umsetzung von Front-End-, Back-End- und KI-Modell-Lösungen mit Fokus auf Leistung und Zuverlässigkeit.',
          ],
        },
      ],
    },
  };

  readonly flags: Record<LanguageKey, string> = {
    pt: '🇧🇷',
    en: '🇺🇸',
    de: '🇩🇪',
  };

  readonly labels: Record<LanguageKey, string> = {
    pt: 'Português',
    en: 'English',
    de: 'Deutsch',
  };

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const lang = (params.get('lang') || 'pt').toLowerCase() as LanguageKey;
      this.language = this.translations[lang] ? lang : 'pt';
    });
  }

  get currentTranslation(): TranslationPage {
    return this.translations[this.language];
  }
}
