import { Injectable } from '@angular/core';

export type Locale = 'pt' | 'en' | 'de';

export interface LocaleOption {
  locale: Locale;
  label: string;
  flag: string;
}

export interface NavTranslations {
  home: string;
  projects: string;
  contact: string;
  about: string;
}

export interface AboutTranslations {
  eyebrow: string;
  title: string;
  intro: string;
  technicalSkills: string;
  java: string;
  database: string;
  ai: string;
  languages: string;
  portuguese: string;
  english: string;
  germanExperience: string;
  certifications: string;
  achievements: string[];
  timeline: Array<{ period: string; title: string; text: string }>;
  resumeLabel: string;
}

export interface HomeTranslations {
  heroTitle: string;
  heroSubtitle: string;
  viewProjects: string;
  contactUs: string;
  projectDetails: string;
  allProjects: string;
  noProjectsTitle: string;
  noProjectsText: string;
  stats: {
    projects: string;
    study: string;
    years: string;
    dedication: string;
  };
  featuredTitle: string;
  featuredSubtitle: string;
  authorialTitle: string;
  authorialSubtitle: string;
  authorialCards: Array<{
    tag: string;
    title: string;
    text: string;
    references: string;
  }>;
  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    database: string;
    tools: string;
  };
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export interface ContactTranslations {
  eyebrow: string;
  title: string;
  intro: string;
  availabilityLabel: string;
  availabilityText: string;
  emailLabel: string;
  emailDescription: string;
  linkedInLabel: string;
  linkedInDescription: string;
  githubLabel: string;
  githubDescription: string;
  mediaLabel: string;
  mediaLinkLabel: string;
}

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly locales: LocaleOption[] = [
    { locale: 'pt', label: 'Português', flag: '🇧🇷' },
    { locale: 'en', label: 'English', flag: '🇬🇧' },
    { locale: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  readonly nav: Record<Locale, NavTranslations> = {
    pt: { home: 'Home', projects: 'Projetos', contact: 'Contato', about: 'Sobre mim' },
    en: { home: 'Home', projects: 'Projects', contact: 'Contact', about: 'About me' },
    de: { home: 'Startseite', projects: 'Projekte', contact: 'Kontakt', about: 'Über mich' },
  };

  readonly about: Record<Locale, AboutTranslations> = {
    pt: {
      eyebrow: 'Perfil profissional',
      title: 'Sobre mim',
      intro: 'Engenheiro de software em formação contínua, com atuação em desenvolvimento Java, inteligência artificial e soluções para a indústria automotiva.',
      technicalSkills: 'Competências técnicas',
      java: 'Java 17+, Spring Boot, Jakarta EE, RESTful APIs, JPA, Maven, Gradle, Thymeleaf, Lombok, tratamento de exceções e autenticação JWT.',
      database: 'MySQL, MariaDB, H2, SQL e modelagem de bancos de dados.',
      ai: 'Python, TensorFlow, PyTorch, Scikit-learn, fine-tuning e avaliação de modelos.',
      languages: 'Idiomas',
      portuguese: 'Português (nativo)',
      english: 'Inglês (fluente - B2/TOEFL)',
      germanExperience: 'Vivência e cultura alemã (fluente - B1/B2/DKFA). Residência de cinco anos em Munique, principalmente em Schwabing, entre a Leopoldstrasse e o Englischer Garten. Alemão nível B2, com curso realizado na DFKA em parceria com a LMU. Imersão cultural com acompanhamento das tradições locais, do Bayern de Munique, da Oktoberfest, da mídia alemã e de museus e centros culturais como BMW Welt, Deutsches Verkehrszentrum, MotorWorld Munich e Deutsches Museum.',
      certifications: 'Certificações e conquistas',
      achievements: [
        'Aluno especial do Mestrado em Informática da UTFPR: Engenharia de Software, Mineração de Dados, Linguagens de Programação e Inteligência Computacional.',
        'AI Residency Program - Grupo de Estudos em IA, com pesquisa em detecção de faixas para sistemas embarcados e carros autônomos.',
        'Pós-Graduação em Tecnologias Java pela UTFPR (360 horas), com aplicativos para gestão de veículos e sensores IoT.',
        'Microsoft Student Summit Africa 2021 Hackathon - solução IoT para monitoramento animal.',
        'Diploma em Medicina Tropical e Saúde Internacional pela LMU (2019) e graduação em Medicina pela UNIOESTE (2013-2018).',
      ],
      timeline: [
        { period: '2025-2026', title: 'Pesquisa e Mestrado', text: 'AI Residency Program e disciplinas do Mestrado em Informática da UTFPR.' },
        { period: '2024-2025', title: 'Pós-Graduação em Tecnologias Java', text: 'Formação de 360 horas pela UTFPR, com projetos em gestão de veículos e IoT.' },
        { period: '2019', title: 'LMU, Alemanha', text: 'Diploma em Medicina Tropical e Saúde Internacional.' },
        { period: '2013-2018', title: 'Graduação em Medicina', text: 'Formação médica pela UNIOESTE.' },
      ],
      resumeLabel: 'Baixar currículo em PDF',
    },
    en: {
      eyebrow: 'Professional profile',
      title: 'About me',
      intro: 'Software engineer in continuous development, focused on Java development, artificial intelligence and solutions for the automotive industry.',
      technicalSkills: 'Technical skills',
      java: 'Java 17+, Spring Boot, Jakarta EE, RESTful APIs, JPA, Maven, Gradle, Thymeleaf, Lombok, exception handling and JWT authentication.',
      database: 'MySQL, MariaDB, H2, SQL and database design.',
      ai: 'Python, TensorFlow, PyTorch, Scikit-learn, fine-tuning and model evaluation.',
      languages: 'Languages',
      portuguese: 'Portuguese (native)',
      english: 'English (fluent - B2/TOEFL)',
      germanExperience: 'German life and culture (fluent - B1/B2/DKFA). I lived in Munich for five years, mainly in Schwabing between Leopoldstrasse and the English Garden. German at B2 level, with a DFKA course in partnership with LMU. Cultural immersion through local traditions, Bayern Munich, Oktoberfest, German media and museums and cultural centers such as BMW Welt, Deutsches Verkehrszentrum, MotorWorld Munich and Deutsches Museum.',
      certifications: 'Certifications and achievements',
      achievements: [
        'Special student in UTFPR\'s Master\'s in Computer Science: Software Engineering, Data Mining, Programming Languages and Computational Intelligence.',
        'AI Residency Program - AI Study Group, researching lane detection algorithms for embedded systems and autonomous cars.',
        'Postgraduate degree in Java Technologies at UTFPR (360 hours), with vehicle management and IoT sensor applications.',
        'Microsoft Student Summit Africa 2021 Hackathon - IoT solution for animal monitoring.',
        'Diploma in Tropical Medicine and International Health from LMU (2019) and Medical degree from UNIOESTE (2013-2018).',
      ],
      timeline: [
        { period: '2025-2026', title: 'Research and Master\'s studies', text: 'AI Residency Program and UTFPR Master\'s courses in Computer Science.' },
        { period: '2024-2025', title: 'Postgraduate degree in Java Technologies', text: '360-hour UTFPR program with vehicle management and IoT projects.' },
        { period: '2019', title: 'LMU, Germany', text: 'Diploma in Tropical Medicine and International Health.' },
        { period: '2013-2018', title: 'Medical degree', text: 'Medical training at UNIOESTE.' },
      ],
      resumeLabel: 'Download resume as PDF',
    },
    de: {
      eyebrow: 'Berufliches Profil',
      title: 'Über mich',
      intro: 'Softwareentwickler in kontinuierlicher Weiterbildung mit Schwerpunkt auf Java, künstlicher Intelligenz und Lösungen für die Automobilindustrie.',
      technicalSkills: 'Technische Kompetenzen',
      java: 'Java 17+, Spring Boot, Jakarta EE, RESTful APIs, JPA, Maven, Gradle, Thymeleaf, Lombok, Ausnahmebehandlung und JWT-Authentifizierung.',
      database: 'MySQL, MariaDB, H2, SQL und Datenbankdesign.',
      ai: 'Python, TensorFlow, PyTorch, Scikit-learn, Fine-Tuning und Modellevaluierung.',
      languages: 'Sprachen',
      portuguese: 'Portugiesisch (Muttersprache)',
      english: 'Englisch (fließend - B2/TOEFL)',
      germanExperience: 'Deutsche Lebens- und Kulturerfahrung (fließend - B1/B2/DKFA). Ich lebte fünf Jahre in München, hauptsächlich in Schwabing zwischen Leopoldstraße und Englischem Garten. Deutschkenntnisse auf B2-Niveau durch einen DFKA-Kurs in Zusammenarbeit mit der LMU. Kulturelle Einbindung durch lokale Traditionen, Bayern München, das Oktoberfest, deutsche Medien sowie Museen und Kulturzentren wie BMW Welt, Deutsches Verkehrszentrum, MotorWorld Munich und Deutsches Museum.',
      certifications: 'Zertifikate und Erfolge',
      achievements: [
        'Gasthörer im Masterstudiengang Informatik an der UTFPR: Software Engineering, Data Mining, Programmiersprachen und Computational Intelligence.',
        'AI Residency Program - KI-Studiengruppe mit Forschung zu Fahrspurerkennungsalgorithmen für eingebettete Systeme und autonome Fahrzeuge.',
        'Aufbaustudium Java-Technologien an der UTFPR (360 Stunden) mit Anwendungen zur Fahrzeugverwaltung und für IoT-Sensoren.',
        'Microsoft Student Summit Africa 2021 Hackathon - IoT-Lösung zur Tierüberwachung.',
        'Diplom in Tropenmedizin und Internationaler Gesundheit an der LMU (2019) sowie Medizinstudium an der UNIOESTE (2013-2018).',
      ],
      timeline: [
        { period: '2025-2026', title: 'Forschung und Masterstudium', text: 'AI Residency Program und Masterkurse Informatik an der UTFPR.' },
        { period: '2024-2025', title: 'Aufbaustudium Java-Technologien', text: '360-stündiges UTFPR-Programm mit Projekten zu Fahrzeugverwaltung und IoT.' },
        { period: '2019', title: 'LMU, Deutschland', text: 'Diplom in Tropenmedizin und Internationaler Gesundheit.' },
        { period: '2013-2018', title: 'Medizinstudium', text: 'Medizinische Ausbildung an der UNIOESTE.' },
      ],
      resumeLabel: 'Lebenslauf als PDF herunterladen',
    },
  };

  readonly home: Record<Locale, HomeTranslations> = {
    pt: {
      heroTitle: 'Bem-vindo ao meu Portfólio',
      heroSubtitle: 'Transformando ideias em experiências digitais e soluções para mobilidade inteligente.',
      viewProjects: 'Ver Projetos',
      contactUs: 'Entrar em Contato',
      projectDetails: 'Ver na página de projetos',
      allProjects: 'Ver todos os projetos',
      noProjectsTitle: 'Nenhum projeto disponível',
      noProjectsText: 'Em breve novos projetos serão adicionados!',
      stats: {
        projects: 'Projetos completos',
        study: 'Estudo contínuo',
        years: 'Anos de dedicação',
        dedication: 'Dedicação',
      },
      featuredTitle: 'Projetos em Destaque',
      featuredSubtitle: 'Conheça alguns dos meus melhores trabalhos.',
      authorialTitle: 'Textos Autorais',
      authorialSubtitle: 'Seções temáticas para compartilhar ideias e contexto técnico.',
      authorialCards: [
        {
          tag: 'Sistema ADAS no Brasil',
          title: 'Desenvolvimento de sistemas inteligentes para mobilidade',
          text: 'O avanço dos sistemas ADAS no Brasil representa uma etapa importante na modernização da indústria automotiva, com foco em segurança, autonomia e experiência do motorista.',
          references: 'Referências: normas de segurança veicular, estudos de mercado automotivo e evolução de sensores e percepção computacional.',
        },
        {
          tag: 'Evolução da Automotiva no Brasil',
          title: 'História do desenvolvimento dos carros no país',
          text: 'A trajetória da automotiva brasileira mostra como produção local, inovação tecnológica e demanda de mercado impulsionaram a criação de soluções mais eficientes e conectadas.',
          references: 'Referências: relatórios setoriais, evolução da indústria automotiva nacional e tendências de mobilidade.',
        },
        {
          tag: 'História do desenvolvimento dos carros',
          title: 'Da mecânica à inteligência artificial aplicada',
          text: 'Os carros deixaram de ser apenas máquinas mecânicas para se tornarem plataformas digitais com sensores, processamento e tomada de decisão assistida.',
          references: 'Referências: história da indústria automotiva, engenharia de software embarcado e IA aplicada à mobilidade.',
        },
      ],
      skills: {
        title: 'Minhas Habilidades',
        subtitle: 'Tecnologias que utilizo no dia a dia.',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Banco de Dados',
        tools: 'Ferramentas',
      },
      ctaTitle: 'Vamos criar algo incrível juntos?',
      ctaText: 'Estou disponível para novos projetos e desafios.',
      ctaButton: 'Entre em Contato Agora',
    },
    en: {
      heroTitle: 'Welcome to my Portfolio',
      heroSubtitle: 'Turning ideas into digital experiences and intelligent mobility solutions.',
      viewProjects: 'View Projects',
      contactUs: 'Contact Me',
      projectDetails: 'View on the projects page',
      allProjects: 'View all projects',
      noProjectsTitle: 'No projects available',
      noProjectsText: 'New projects will be added soon!',
      stats: {
        projects: 'Completed projects',
        study: 'Continuous learning',
        years: 'Years of dedication',
        dedication: 'Dedication',
      },
      featuredTitle: 'Featured Projects',
      featuredSubtitle: 'Explore some of my best work.',
      authorialTitle: 'Authorial Texts',
      authorialSubtitle: 'Thematic sections to share ideas and technical context.',
      authorialCards: [
        {
          tag: 'ADAS Systems in Brazil',
          title: 'Development of intelligent systems for mobility',
          text: 'The growth of ADAS systems in Brazil is an important step in the modernization of the automotive industry, with a focus on safety, autonomy and driver experience.',
          references: 'References: vehicle safety regulations, automotive market studies and sensor evolution with computational perception.',
        },
        {
          tag: 'Automotive Evolution in Brazil',
          title: 'History of vehicle development in the country',
          text: 'The trajectory of the Brazilian automotive sector shows how local production, technology and market demand drove the creation of more efficient and connected solutions.',
          references: 'References: sector reports, evolution of the national automotive industry and mobility trends.',
        },
        {
          tag: 'History of vehicle development',
          title: 'From mechanics to applied artificial intelligence',
          text: 'Cars stopped being just mechanical machines and became digital platforms with sensors, processing capabilities and assisted decision-making.',
          references: 'References: automotive history, embedded software engineering and AI applied to mobility.',
        },
      ],
      skills: {
        title: 'My Skills',
        subtitle: 'Technologies I use on a daily basis.',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        tools: 'Tools',
      },
      ctaTitle: 'Let’s build something amazing together?',
      ctaText: 'I am available for new projects and challenges.',
      ctaButton: 'Get in Touch Now',
    },
    de: {
      heroTitle: 'Willkommen in meinem Portfolio',
      heroSubtitle: 'Ideen in digitale Erlebnisse und intelligente Mobilitätslösungen verwandeln.',
      viewProjects: 'Projekte ansehen',
      contactUs: 'Kontakt aufnehmen',
      projectDetails: 'Auf der Projektseite ansehen',
      allProjects: 'Alle Projekte ansehen',
      noProjectsTitle: 'Keine Projekte verfügbar',
      noProjectsText: 'Bald werden neue Projekte hinzugefügt!',
      stats: {
        projects: 'Abgeschlossene Projekte',
        study: 'Kontinuierliches Lernen',
        years: 'Jahre der Hingabe',
        dedication: 'Engagement',
      },
      featuredTitle: 'Hervorgehobene Projekte',
      featuredSubtitle: 'Entdecken Sie einige meiner besten Arbeiten.',
      authorialTitle: 'Autorenbeiträge',
      authorialSubtitle: 'Thematische Abschnitte zur Präsentation von Ideen und technischem Kontext.',
      authorialCards: [
        {
          tag: 'ADAS-Systeme in Brasilien',
          title: 'Entwicklung intelligenter Systeme für Mobilität',
          text: 'Die Entwicklung von ADAS-Systemen in Brasilien ist ein wichtiger Schritt in der Modernisierung der Automobilindustrie mit Fokus auf Sicherheit, Autonomie und Fahrerlebnis.',
          references: 'Referenzen: Fahrzeug-Sicherheitsnormen, Automobilmarktstudien und Sensorevolution mit computergestützter Wahrnehmung.',
        },
        {
          tag: 'Automobilentwicklung in Brasilien',
          title: 'Geschichte der Fahrzeugentwicklung im Land',
          text: 'Die Entwicklung der brasilianischen Automobilindustrie zeigt, wie lokale Produktion, technologische Innovation und Marktnachfrage effizientere und vernetztere Lösungen ermöglichten.',
          references: 'Referenzen: Branchenberichte, Entwicklung der nationalen Automobilindustrie und Mobilitätstrends.',
        },
        {
          tag: 'Geschichte der Fahrzeugentwicklung',
          title: 'Von der Mechanik zur angewandten Künstlichen Intelligenz',
          text: 'Autos sind nicht mehr nur mechanische Maschinen, sondern digitale Plattformen mit Sensoren, Verarbeitung und assistierter Entscheidungsfindung.',
          references: 'Referenzen: Automobilgeschichte, eingebettete Softwareentwicklung und KI für Mobilität.',
        },
      ],
      skills: {
        title: 'Meine Fähigkeiten',
        subtitle: 'Technologien, die ich täglich verwende.',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Datenbank',
        tools: 'Werkzeuge',
      },
      ctaTitle: 'Lassen Sie uns etwas Großartiges zusammen entwickeln?',
      ctaText: 'Ich bin für neue Projekte und Herausforderungen verfügbar.',
      ctaButton: 'Jetzt Kontakt aufnehmen',
    },
  };

  readonly contact: Record<Locale, ContactTranslations> = {
    pt: {
      eyebrow: 'Contato',
      title: 'Vamos conversar',
      intro: 'Se você quiser falar sobre projetos, colaborar em uma ideia ou trocar uma mensagem, estes são os meus canais principais.',
      availabilityLabel: 'Disponível para',
      availabilityText: 'desenvolvimento de sistemas, front-end e back-end, implementação de modelos de IA, com foco em automotiva e sistemas ADAS (Advanced Driver-Assistance Systems).',
      emailLabel: 'Email',
      emailDescription: 'Envie uma mensagem para propostas, dúvidas ou oportunidades.',
      linkedInLabel: 'LinkedIn',
      linkedInDescription: 'Veja meu perfil profissional e experiência em desenvolvimento.',
      githubLabel: 'GitHub',
      githubDescription: 'Confira meus repositórios, projetos e estudos de código.',
      mediaLabel: 'Mídia do portfólio',
      mediaLinkLabel: 'Ver apresentação visual do perfil',
    },
    en: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      intro: 'If you want to discuss projects, collaborate on an idea or just send a message, these are my main channels.',
      availabilityLabel: 'Available for',
      availabilityText: 'system development, front-end and back-end, AI model implementation, with a focus on automotive and ADAS systems (Advanced Driver-Assistance Systems).',
      emailLabel: 'Email',
      emailDescription: 'Send a message for proposals, questions or opportunities.',
      linkedInLabel: 'LinkedIn',
      linkedInDescription: 'Explore my professional profile and development experience.',
      githubLabel: 'GitHub',
      githubDescription: 'Check out my repositories, projects and coding studies.',
      mediaLabel: 'Portfolio media',
      mediaLinkLabel: 'View the visual profile presentation',
    },
    de: {
      eyebrow: 'Kontakt',
      title: 'Lass uns sprechen',
      intro: 'Wenn Sie über Projekte sprechen, an einer Idee mitarbeiten oder einfach nur eine Nachricht senden möchten, hier sind meine wichtigsten Kanäle.',
      availabilityLabel: 'Verfügbar für',
      availabilityText: 'Systementwicklung, Front-End und Back-End, Implementierung von KI-Modellen mit Fokus auf Automobilindustrie und ADAS-Systeme (Advanced Driver-Assistance Systems).',
      emailLabel: 'E-Mail',
      emailDescription: 'Senden Sie eine Nachricht für Vorschläge, Fragen oder Chancen.',
      linkedInLabel: 'LinkedIn',
      linkedInDescription: 'Sehen Sie sich mein berufliches Profil und meine Entwicklungserfahrung an.',
      githubLabel: 'GitHub',
      githubDescription: 'Schauen Sie sich meine Repositories, Projekte und Code-Studien an.',
      mediaLabel: 'Portfolio-Medien',
      mediaLinkLabel: 'Visuelle Profilpräsentation ansehen',
    },
  };

  getLocale(locale: string | null): Locale {
    return locale === 'en' || locale === 'de' ? locale : 'pt';
  }

  getFlag(locale: Locale): string {
    return this.locales.find((item) => item.locale === locale)?.flag ?? '🇧🇷';
  }
}
