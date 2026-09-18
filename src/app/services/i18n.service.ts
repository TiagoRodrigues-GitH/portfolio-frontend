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
  personalExperienceTitle: string;
  personalExperience: string;
  certifications: string;
  achievements: string[];
  timeline: Array<{ period: string; title: string; text: string }>;
  resumeLabel: string;
}

export interface StatTranslation {
  label: string;
  description: string;
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
    automotive: StatTranslation;
    software: StatTranslation;
    artificialIntelligence: StatTranslation;
    embedded: StatTranslation;
    international: StatTranslation;
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
      intro: 'Desenvolvedor de software em formação contínua, com atuação em desenvolvimento Java, inteligência artificial e soluções para a indústria automotiva.',
      technicalSkills: 'Competências técnicas',
      java: 'Java 17+, Spring Boot, Jakarta EE, RESTful APIs, JPA, Maven, Gradle, Thymeleaf, Lombok, tratamento de exceções e autenticação JWT.',
      database: 'MySQL, MariaDB, H2, SQL e modelagem de bancos de dados.',
      ai: 'Python, TensorFlow, PyTorch, Scikit-learn, fine-tuning e avaliação de modelos.',
      languages: 'Idiomas',
      portuguese: 'Português (nativo)',
      english: 'Inglês (fluente - B2/TOEFL)',
      germanExperience: 'Alemão (B1/B2, curso DFKA em parceria com a LMU).',
      personalExperienceTitle: 'Experiências pessoais',
      personalExperience: 'Residência de cinco anos em Munique, principalmente em Schwabing, entre a Leopoldstrasse e o Englischer Garten. Alemão nível B2, com curso realizado na DFKA em parceria com a LMU. Imersão cultural com acompanhamento das tradições locais, do Bayern de Munique, da Oktoberfest, da mídia alemã e de museus e centros culturais como BMW Welt, Deutsches Verkehrszentrum, MotorWorld Munich e Deutsches Museum.',
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
      intro: 'Software developer in continuous development, focused on Java development, artificial intelligence and solutions for the automotive industry.',
      technicalSkills: 'Technical skills',
      java: 'Java 17+, Spring Boot, Jakarta EE, RESTful APIs, JPA, Maven, Gradle, Thymeleaf, Lombok, exception handling and JWT authentication.',
      database: 'MySQL, MariaDB, H2, SQL and database design.',
      ai: 'Python, TensorFlow, PyTorch, Scikit-learn, fine-tuning and model evaluation.',
      languages: 'Languages',
      portuguese: 'Portuguese (native)',
      english: 'English (fluent - B2/TOEFL)',
      germanExperience: 'German (B1/B2, DFKA course in partnership with LMU).',
      personalExperienceTitle: 'Personal experiences',
      personalExperience: 'I lived in Munich for five years, mainly in Schwabing, between Leopoldstrasse and the English Garden. I reached B2-level German through a DFKA course held in partnership with LMU. This period also gave me a close experience of local traditions, Bayern Munich, Oktoberfest, German media, and museums and cultural centres such as BMW Welt, Deutsches Verkehrszentrum, MotorWorld Munich and Deutsches Museum.',
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
      germanExperience: 'Deutsch (B1/B2, DFKA-Kurs in Zusammenarbeit mit der LMU).',
      personalExperienceTitle: 'Persönliche Erfahrungen',
      personalExperience: 'Fünf Jahre habe ich in München gelebt, vor allem in Schwabing zwischen Leopoldstraße und Englischem Garten. Meine Deutschkenntnisse auf B2-Niveau habe ich in einem DFKA-Kurs in Zusammenarbeit mit der LMU vertieft. Diese Zeit hat mir außerdem einen unmittelbaren Einblick in lokale Traditionen, den FC Bayern, das Oktoberfest, die deutsche Medienlandschaft sowie Museen und Kulturzentren wie die BMW Welt, das Deutsche Verkehrszentrum, MotorWorld Munich und das Deutsche Museum gegeben.',
      certifications: 'Ausbildung und Erfolge',
      achievements: [
        'Masterstudium Informatik an der UTFPR als Gasthörer: Softwaretechnik, Data Mining, Programmiersprachen und Computational Intelligence.',
        'AI Residency Program: Forschung in einer KI-Studiengruppe zur Fahrspurerkennung für eingebettete Systeme und autonome Fahrzeuge.',
        'Aufbaustudium Java-Technologien an der UTFPR (360 Stunden) mit Anwendungen für Fahrzeugverwaltung und IoT-Sensoren.',
        'Microsoft Student Summit Africa 2021 Hackathon: IoT-Lösung zur Tierüberwachung.',
        'Diplom in Tropenmedizin und Internationaler Gesundheit an der LMU (2019) sowie Medizinstudium an der UNIOESTE (2013–2018).',
      ],
      timeline: [
        { period: '2025–2026', title: 'Forschung und Masterstudium', text: 'AI Residency Program und Masterkurse in Informatik an der UTFPR.' },
        { period: '2024–2025', title: 'Aufbaustudium Java-Technologien', text: '360-stündiges Programm an der UTFPR mit Projekten zur Fahrzeugverwaltung und zu IoT.' },
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
        automotive: {
          label: 'Foco automotivo',
          description: 'Transição de carreira para a indústria automotiva, com foco em desenvolvimento de software e tecnologias inteligentes.',
        },
        software: {
          label: 'Desenvolvimento de software',
          description: 'Java • Python • Engenharia de Software • APIs • Banco de Dados',
        },
        artificialIntelligence: {
          label: 'Inteligência artificial',
          description: 'Machine Learning • Reconhecimento de Padrões • Inteligência Computacional • IA aplicada',
        },
        embedded: {
          label: 'Sistemas embarcados & IoT',
          description: 'Sistemas embarcados • IoT • Sensores • Desenvolvimento de aplicações',
        },
        international: {
          label: 'Perfil internacional',
          description: 'Alemão B2 • Inglês B2 • Vivência acadêmica e cultural na Alemanha',
        },
      },
      featuredTitle: 'Projetos em Destaque',
      featuredSubtitle: 'Conheça alguns dos meus melhores trabalhos.',
      authorialTitle: 'Textos Autorais',
      authorialSubtitle: 'Seções temáticas para compartilhar ideias e contexto técnico.',
      authorialCards: [
        {
          tag: 'O que são sistemas ADAS',
          title: 'Requisitos regulatórios',
          text: 'Os Sistemas Avançados de Assistência ao Condutor (Advanced Driver Assistance Systems — ADAS) são tecnologias embarcadas desenvolvidas para auxiliar o motorista na percepção do ambiente, na tomada de decisões e, em determinadas funções, na execução de intervenções sobre o veículo. Segundo Yurtsever et al. [1], os sistemas de assistência constituem uma etapa importante na evolução da automação veicular, combinando sensores, processamento computacional e algoritmos para interpretar o ambiente de condução. Entre suas aplicações estão o controle adaptativo de velocidade (ACC), a frenagem automática de emergência (AEB), o alerta de saída de faixa (LDWS) e o assistente de permanência em faixa (LKAS). Estudos de revisão também apontam que essas tecnologias são investigadas como ferramentas para aumentar a segurança e reduzir situações de risco no trânsito [2].Na prática, essas tecnologias já estão presentes em veículos comercializados no Brasil. O BMW i3, por exemplo, foi oferecido no mercado brasileiro com o Driving Assistant Plus, incluindo recursos de alerta de mudança involuntária de faixa, prevenção de aproximação frontal e outros sistemas de assistência [3]. Atualmente, a Honda disponibiliza o Honda SENSING em diferentes modelos comercializados no país, reunindo funções como ACC, frenagem para mitigação de colisões, LKAS e mitigação de saída de pista [4]. Esses exemplos mostram que ADAS não corresponde a uma única tecnologia, mas a um conjunto de funções que podem atuar de forma integrada, utilizando diferentes sensores e níveis de automação. Assim, um sistema ADAS deve ser compreendido como uma arquitetura de assistência ao condutor, e não simplesmente como um recurso isolado. A câmera, o radar, o processamento computacional e os algoritmos de percepção constituem partes de uma cadeia que transforma informações do ambiente em alertas ou ações de assistência. No caso do LKAS, por exemplo, a identificação das marcações da pista é uma etapa fundamental para estimar a posição do veículo em relação à faixa e permitir a assistência à direção. Essa integração entre percepção, processamento e atuação estabelece a conexão entre os sistemas ADAS atuais e as técnicas de visão computacional e inteligência artificial utilizadas em seu desenvolvimento.',
          references: '[1] E. Yurtsever, J. Lambert, A. Carballo and K. Takeda, “A Survey of Autonomous Driving: Common Practices and Emerging Technologies,” IEEE Access, vol. 8, pp. 58443–58469, 2020, doi: 10.1109/ACCESS.2020.2983149.[2] S. A. Useche, M. Faus and F. Alonso, “Cyclist at 12 o’clock!: A systematic review of in-vehicle advanced driver assistance systems (ADAS) for preventing car-rider crashes,” Frontiers in Public Health, vol. 12, 2024, doi: 10.3389/fpubh.2024.1335209.[3] BMW GROUP BRASIL, “Novo BMW i3 chega ao Brasil,” BMW PressClub Brasil, 2018. A publicação descreve o Driving Assistant Plus e suas funções de assistência ao condutor.[4] HONDA AUTOMÓVEIS, “Honda SENSING — Segurança e assistência ao condutor,” Honda Brasil, 2026.',
        },
        {
          tag: 'ADAS e regulamentação',
          title: 'ADAS, regulamentação e maturidade tecnológica',
          text: 'A expansão dos sistemas ADAS também está relacionada à evolução dos requisitos de segurança e regulamentação automotiva. No Brasil, a Lei nº 14.902/2024, que instituiu o Programa Mobilidade Verde e Inovação (MOVER), estabeleceu entre suas diretrizes o aumento da disponibilidade de tecnologias assistivas à direção nos veículos comercializados no país [1]. O Decreto nº 12.435/2025, que regulamenta o programa, definiu o índice de desempenho estrutural e tecnologias assistivas à direção (InTec) e incluiu, entre seus requisitos, sistemas como frenagem automática de emergência (AEB), alerta de afastamento de faixa (LDWS) e, no grupo de tecnologias inovadoras, o assistente de permanência em faixa (LKAS) [2]. Desde 1º de junho de 2025, a comercialização e a importação de determinados veículos novos passaram a estar condicionadas ao atendimento dos requisitos estabelecidos pelo programa [3]. Para a comprovação de desempenho, o próprio decreto prevê a utilização de regulamentações do CONTRAN e, quando não houver regulamentação nacional específica, referências internacionais como os regulamentos da UNECE e padrões ISO [2].O desenvolvimento de um ADAS, entretanto, envolve requisitos que vão além da homologação do veículo. A ISO 26262 estabelece uma estrutura para segurança funcional de sistemas elétricos e eletrônicos automotivos [4], enquanto a ISO 21448 (SOTIF) trata dos riscos relacionados à segurança da funcionalidade pretendida, aspecto especialmente relevante para sistemas que dependem de sensores e algoritmos de percepção [5]. Para funções de direção relacionadas à manutenção da trajetória, o UN Regulation No. 79 constitui uma referência internacional para sistemas de direção e funções de assistência [6]. A legislação brasileira também utiliza diferentes mecanismos de comprovação de desempenho conforme a tecnologia e a categoria do veículo. Portanto, normas de segurança funcional, requisitos de homologação e requisitos de desempenho devem ser considerados de maneira integrada no desenvolvimento de um sistema ADAS. A maturidade de uma tecnologia também pode ser descrita pelo Technology Readiness Level (TRL). Na metodologia utilizada pela FINEP MOVER, a escala varia de TRL 1, correspondente à observação de princípios básicos, até TRL 9, no qual o sistema está operando e comprovado em sua missão [7]. Para uma solução de Lane Detection, por exemplo, a validação de um modelo em datasets representa uma etapa experimental, enquanto a integração em hardware embarcado, testes em ambiente relevante, demonstração em veículo e qualificação do sistema correspondem a estágios progressivamente mais avançados. O TRL, portanto, não deve ser confundido com uma certificação obrigatória para ADAS, mas utilizado para caracterizar o nível de maturidade alcançado por uma tecnologia específica. No contexto brasileiro, essa perspectiva aproxima a pesquisa acadêmica das etapas de desenvolvimento, validação e eventual industrialização de soluções automotivas.',
          references: '[1] BRASIL. Lei nº 14.902, de 27 de junho de 2024. Institui o Programa Mobilidade Verde e Inovação — Programa MOVER. Brasília, DF, 2024.[2] BRASIL. Decreto nº 12.435, de 15 de abril de 2025. Regulamenta o Programa Mobilidade Verde e Inovação — Programa MOVER. Brasília, DF, 2025.[3] BRASIL. Ministério do Desenvolvimento, Indústria, Comércio e Serviços. Programa MOVER. Brasília, 2026.[4] INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO 26262:2018 — Road vehicles — Functional safety. Geneva: ISO, 2018.[5] INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO 21448:2022 — Road vehicles — Safety of the intended functionality. Geneva: ISO, 2022.[6] UNITED NATIONS ECONOMIC COMMISSION FOR EUROPE. UN Regulation No. 79 — Uniform provisions concerning the approval of vehicles with regard to steering equipment. UNECE, 2022.[7] FINEP; MCTI; MDIC. Finep MOVER Empresarial — Anexo 5: Definição de Nível de Maturidade Tecnológica (TRL). Brasília, 2025.',
        },
        {
          tag: 'ADAS e IA',
          title: 'ADAS, Inteligência Artificial e sistemas embarcados',
          text: 'A Inteligência Artificial (IA) tem ampliado as possibilidades de percepção utilizadas em sistemas ADAS, especialmente na interpretação de imagens e na identificação de elementos da via. Entre essas aplicações, a detecção de faixas (Lane Detection) é uma etapa importante para funções como LDWS e LKAS, pois permite estimar a localização e a geometria das marcações da pista. Revisões sobre o tema mostram uma evolução de métodos tradicionais de processamento de imagens para arquiteturas baseadas em aprendizado profundo, capazes de aprender representações diretamente dos dados [1], [2]. Essa evolução, entretanto, introduz um desafio específico para aplicações automotivas: o modelo precisa combinar capacidade de percepção com requisitos de processamento em tempo real, robustez e eficiência computacional.Nesse contexto, Qin, Wang e Li propuseram o Ultra Fast Structure-aware Deep Lane Detection (UFLD), formulando a detecção de faixas como um problema de seleção por linhas (row-based selection) em vez de depender exclusivamente de segmentação pixel a pixel [3]. Segundo os autores, essa formulação reduz significativamente o custo computacional e permite alcançar elevada velocidade de inferência, característica relevante para aplicações embarcadas. Outra abordagem, apresentada por Tabelini et al. no LaneATT, utiliza atenção para explorar informações globais da imagem e lidar com situações como oclusões e marcações incompletas, mantendo a preocupação com eficiência em tempo real [4]. Pesquisas mais recentes também exploram modelos temporais, nos quais informações de quadros consecutivos são utilizadas para melhorar a detecção em situações nas quais uma única imagem apresenta informações insuficientes [5]. Dessa forma, a escolha de um algoritmo para ADAS envolve não apenas a precisão do modelo, mas também latência, FPS, memória, consumo computacional e estabilidade das previsões. Para sistemas embarcados, portanto, o desenvolvimento de IA para ADAS exige uma relação entre desempenho de percepção e eficiência computacional. Um modelo pode apresentar excelentes resultados em um benchmark e, ainda assim, exigir recursos incompatíveis com a plataforma embarcada disponível. Trabalhos recentes sobre detecção de faixas em sistemas de baixo consumo reforçam a importância de arquiteturas capazes de operar em hardware limitado, inclusive plataformas baseadas exclusivamente em CPU [6]. Nesse cenário, arquiteturas leves como UFLD e LaneATT, juntamente com estratégias temporais, otimização de modelos e avaliação em hardware real, constituem caminhos para aproximar os resultados obtidos em pesquisa de aplicações automotivas. Para um sistema de Lane Keeping, essa abordagem permite investigar não somente se a faixa pode ser detectada, mas se ela pode ser detectada com precisão, estabilidade e velocidade suficientes para uma aplicação embarcada.',
          references: '[1] N. J. Zakaria et al., “Lane Detection in Autonomous Vehicles: A Systematic Review,” IEEE Access, vol. 11, pp. 3729–3765, 2023, doi: 10.1109/ACCESS.2023.3234442.[2] J. Tang, S. Li and P. Liu, “A Review of Lane Detection Methods Based on Deep Learning,” Pattern Recognition, vol. 111, p. 107623, 2021, doi: 10.1016/j.patcog.2020.107623.[3] Z. Qin, H. Wang and X. Li, “Ultra Fast Structure-aware Deep Lane Detection,” in Proc. European Conference on Computer Vision (ECCV), 2020, pp. 276–291, doi: 10.1007/978-3-030-58586-0_17.[4] L. Tabelini et al., “Keep Your Eyes on the Lane: Real-Time Attention-Guided Lane Detection,” in Proc. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2021, pp. 294–302, doi: 10.1109/CVPR46437.2021.00036.[5] Y. Dong et al., “A Hybrid Spatial–Temporal Deep Learning Architecture for Lane Detection,” Computer-Aided Civil and Infrastructure Engineering, vol. 38, no. 1, pp. 67–86, 2023, doi: 10.1111/mice.12829.[6] S.-E. Tsai, S.-M. Yang and C.-H. Hsieh, “Real-Time Deterministic Lane Detection on CPU-Only Embedded Systems via Binary Line Segment Filtering,” Electronics, vol. 15, no. 2, p. 351, 2026, doi: 10.3390/electronics15020351.',
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
        automotive: {
          label: 'Automotive focus',
          description: 'Career transition into the automotive industry, focused on software development and intelligent technologies.',
        },
        software: {
          label: 'Software development',
          description: 'Java • Python • Software Engineering • APIs • Databases',
        },
        artificialIntelligence: {
          label: 'Artificial intelligence',
          description: 'Machine Learning • Pattern Recognition • Computational Intelligence • Applied AI',
        },
        embedded: {
          label: 'Embedded systems & IoT',
          description: 'Embedded systems • IoT • Sensors • Application development',
        },
        international: {
          label: 'International profile',
          description: 'German B2 • English B2 • Academic and cultural experience in Germany',
        },
      },
      featuredTitle: 'Featured Projects',
      featuredSubtitle: 'Explore some of my best work.',
      authorialTitle: 'Authorial Texts',
      authorialSubtitle: 'Thematic sections to share ideas and technical context.',
      authorialCards: [
        {
          tag: 'What ADAS systems are',
          title: 'Regulatory requirements',
          text: 'Advanced Driver Assistance Systems (ADAS) are embedded technologies designed to support the driver in perceiving the surrounding environment, making decisions and, in some functions, intervening in vehicle control. As described by Yurtsever et al. [1], driver-assistance systems represent an important step in the evolution of vehicle automation by combining sensors, computing and algorithms to interpret driving conditions. Typical applications include adaptive cruise control (ACC), automatic emergency braking (AEB), lane-departure warning (LDWS) and lane-keeping assistance (LKAS). Review studies also examine these technologies as tools for improving safety and reducing traffic risks [2]. These systems are already present in vehicles sold in Brazil. The BMW i3, for example, was offered with Driving Assistant Plus, including warnings for unintended lane changes, front-collision prevention and other assistance functions [3]. Honda currently offers Honda SENSING in several models sold in the country, combining ACC, collision-mitigation braking, LKAS and road-departure mitigation [4]. These examples show that ADAS is not a single technology, but a set of integrated functions using different sensors and levels of automation. An ADAS should therefore be understood as a driver-assistance architecture rather than an isolated feature: cameras, radar, computing and perception algorithms form a chain that turns environmental information into warnings or assistance actions.',
          references: '[1] E. Yurtsever, J. Lambert, A. Carballo and K. Takeda, “A Survey of Autonomous Driving: Common Practices and Emerging Technologies,” IEEE Access, vol. 8, pp. 58443–58469, 2020. [2] S. A. Useche, M. Faus and F. Alonso, “Cyclist at 12 o’clock!: A systematic review of in-vehicle advanced driver assistance systems (ADAS) for preventing car-rider crashes,” Frontiers in Public Health, vol. 12, 2024. [3] BMW Group Brasil, “Novo BMW i3 chega ao Brasil,” BMW PressClub Brasil, 2018. [4] Honda Automóveis, “Honda SENSING — Segurança e assistência ao condutor,” Honda Brasil, 2026.',
        },
        {
          tag: 'ADAS and regulation',
          title: 'ADAS, regulation and technological maturity',
          text: 'The expansion of ADAS is closely connected to the development of automotive safety requirements and regulation. In Brazil, Law No. 14,902/2024, which established the Green Mobility and Innovation Program (MOVER), included the wider availability of driver-assistance technologies among its guidelines [1]. Decree No. 12,435/2025 defined the InTec performance index and included functions such as automatic emergency braking (AEB), lane-departure warning (LDWS) and lane-keeping assistance (LKAS) among its requirements [2]. Since June 1, 2025, the sale and import of certain new vehicles have been subject to the program requirements [3]. The decree also refers to CONTRAN regulations and, where no specific national rule exists, international references such as UNECE regulations and ISO standards [2]. Vehicle approval, however, is only one part of the challenge. ISO 26262 addresses the functional safety of automotive electrical and electronic systems [4], while ISO 21448 (SOTIF) addresses risks related to the safety of intended functionality, especially in systems that depend on sensors and perception algorithms [5]. For functions related to trajectory keeping, UN Regulation No. 79 is an important international reference [6]. ADAS development therefore requires functional safety, approval requirements and performance targets to be treated as one connected engineering problem, from the first design decision to real-world validation.',
          references: '[1] Brazil, Law No. 14,902 of June 27, 2024. Green Mobility and Innovation Program — MOVER. [2] Brazil, Decree No. 12,435 of April 15, 2025. [3] Brazil, Ministry of Development, Industry, Foreign Trade and Services. MOVER Program, 2026. [4] International Organization for Standardization. ISO 26262:2018. [5] International Organization for Standardization. ISO 21448:2022. [6] United Nations Economic Commission for Europe. UN Regulation No. 79, 2022.',
        },
        {
          tag: 'ADAS and AI',
          title: 'ADAS, artificial intelligence and embedded systems',
          text: 'Artificial intelligence has expanded the perception capabilities used in ADAS, particularly for image interpretation and the identification of road elements. Lane detection is important for functions such as LDWS and LKAS because it estimates the position and geometry of lane markings. Research reviews describe a shift from traditional image-processing methods to deep-learning architectures that learn representations directly from data [1], [2]. This progress creates a specific challenge for automotive applications: a model must combine perception quality with real-time processing, robustness and computational efficiency. Qin, Wang and Li proposed Ultra Fast Structure-aware Deep Lane Detection (UFLD), framing lane detection as a row-based selection problem rather than relying exclusively on pixel-level segmentation [3]. LaneATT, presented by Tabelini et al., uses attention to capture global image information and handle occlusions or incomplete markings while maintaining real-time efficiency [4]. More recent work also explores temporal models that use consecutive frames to improve detection when a single image contains insufficient information [5]. Choosing an ADAS algorithm therefore involves more than model accuracy. Latency, frames per second, memory, energy consumption and prediction stability are equally important. For embedded systems, AI development must balance research performance with the practical limits of the hardware.',
          references: '[1] N. J. Zakaria et al., “Lane Detection in Autonomous Vehicles: A Systematic Review,” IEEE Access, vol. 11, pp. 3729–3765, 2023. [2] J. Tang, S. Li and P. Liu, “A Review of Lane Detection Methods Based on Deep Learning,” Pattern Recognition, vol. 111, 2021. [3] Z. Qin, H. Wang and X. Li, “Ultra Fast Structure-aware Deep Lane Detection,” ECCV, 2020. [4] L. Tabelini et al., “Keep Your Eyes on the Lane: Real-Time Attention-Guided Lane Detection,” CVPR, 2021. [5] Y. Dong et al., “A Hybrid Spatial–Temporal Deep Learning Architecture for Lane Detection,” 2023.',
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
      heroSubtitle: 'Ich entwickle aus Ideen digitale Erlebnisse und Lösungen für die intelligente Mobilität.',
      viewProjects: 'Projekte ansehen',
      contactUs: 'Kontakt aufnehmen',
      projectDetails: 'Auf der Projektseite ansehen',
      allProjects: 'Alle Projekte ansehen',
      noProjectsTitle: 'Keine Projekte verfügbar',
      noProjectsText: 'Bald werden neue Projekte hinzugefügt!',
      stats: {
        automotive: {
          label: 'Automobiler Schwerpunkt',
          description: 'Beruflicher Wechsel in die Automobilindustrie mit Fokus auf Softwareentwicklung und intelligente Technologien.',
        },
        software: {
          label: 'Softwareentwicklung',
          description: 'Java • Python • Softwaretechnik • APIs • Datenbanken',
        },
        artificialIntelligence: {
          label: 'Künstliche Intelligenz',
          description: 'Machine Learning • Mustererkennung • Computational Intelligence • Angewandte KI',
        },
        embedded: {
          label: 'Eingebettete Systeme & IoT',
          description: 'Eingebettete Systeme • IoT • Sensoren • Anwendungsentwicklung',
        },
        international: {
          label: 'Internationales Profil',
          description: 'Deutsch B2 • Englisch B2 • Akademische und kulturelle Erfahrung in Deutschland',
        },
      },
      featuredTitle: 'Hervorgehobene Projekte',
      featuredSubtitle: 'Ein Einblick in ausgewählte Arbeiten.',
      authorialTitle: 'Eigene Beiträge',
      authorialSubtitle: 'Texte über Technologie, Mobilität und den Kontext hinter den Projekten.',
      authorialCards: [
        {
          tag: 'Was ADAS-Systeme leisten',
          title: 'Regulatorische Anforderungen',
          text: 'Advanced Driver Assistance Systems (ADAS) sind eingebettete Technologien, die den Fahrer bei der Wahrnehmung der Umgebung, bei Entscheidungen und in bestimmten Funktionen auch bei Eingriffen in die Fahrzeugsteuerung unterstützen. Wie Yurtsever et al. [1] zeigen, sind Fahrerassistenzsysteme ein wichtiger Schritt in der Entwicklung der Fahrzeugautomatisierung: Sensoren, Rechenleistung und Algorithmen werden miteinander verbunden, um die Verkehrssituation zu interpretieren. Zu den typischen Anwendungen gehören die adaptive Geschwindigkeitsregelung (ACC), die automatische Notbremsung (AEB), der Spurverlassenswarner (LDWS) und der Spurhalteassistent (LKAS). Übersichtsarbeiten untersuchen diese Technologien außerdem als Instrumente, um die Verkehrssicherheit zu erhöhen und Risikosituationen zu verringern [2]. In Brasilien sind solche Funktionen bereits in Fahrzeugen auf dem Markt zu finden. Der BMW i3 wurde beispielsweise mit Driving Assistant Plus angeboten, unter anderem mit Warnungen vor unbeabsichtigtem Spurwechsel und Funktionen zur Vermeidung von Frontkollisionen [3]. Honda bietet Honda SENSING inzwischen in mehreren Modellen an; dazu gehören ACC, kollisionsminderndes Bremsen, LKAS und die Minderung eines unbeabsichtigten Verlassens der Fahrbahn [4]. ADAS bezeichnet damit keine einzelne Technologie, sondern ein Zusammenspiel verschiedener Funktionen, Sensoren und Automatisierungsstufen. Ein ADAS ist folglich als Assistenzarchitektur zu verstehen: Kamera, Radar, Rechenleistung und Wahrnehmungsalgorithmen übersetzen Umgebungsdaten in Warnungen oder unterstützende Aktionen.',
          references: '[1] E. Yurtsever, J. Lambert, A. Carballo und K. Takeda, “A Survey of Autonomous Driving: Common Practices and Emerging Technologies,” IEEE Access, Bd. 8, S. 58443–58469, 2020. [2] S. A. Useche, M. Faus und F. Alonso, “Cyclist at 12 o’clock!: A systematic review of in-vehicle advanced driver assistance systems (ADAS) for preventing car-rider crashes,” Frontiers in Public Health, Bd. 12, 2024. [3] BMW Group Brasil, “Novo BMW i3 chega ao Brasil,” BMW PressClub Brasil, 2018. [4] Honda Automóveis, “Honda SENSING — Segurança e assistência ao condutor,” Honda Brasil, 2026.',
        },
        {
          tag: 'ADAS und Regulierung',
          title: 'ADAS, Regulierung und technologische Reife',
          text: 'Die Verbreitung von ADAS hängt eng mit der Entwicklung von Sicherheitsanforderungen und gesetzlichen Rahmenbedingungen zusammen. In Brasilien formuliert das Gesetz Nr. 14.902/2024, mit dem das Programm für grüne Mobilität und Innovation (MOVER) geschaffen wurde, die stärkere Verfügbarkeit von Fahrerassistenztechnologien als eines seiner Ziele [1]. Das Dekret Nr. 12.435/2025 definiert den Leistungsindex InTec und nennt unter anderem die automatische Notbremsung (AEB), den Spurverlassenswarner (LDWS) und den Spurhalteassistenten (LKAS) als relevante Funktionen [2]. Seit dem 1. Juni 2025 ist der Verkauf und Import bestimmter Neufahrzeuge an die Einhaltung dieser Anforderungen gebunden [3]. Für den Nachweis der Leistungsfähigkeit verweist das Dekret auf CONTRAN-Regelungen und, sofern keine nationale Vorschrift vorliegt, auf internationale Grundlagen wie UNECE-Regelungen und ISO-Normen [2]. Die Zulassung eines Fahrzeugs ist jedoch nur ein Teil der Aufgabe. ISO 26262 behandelt die funktionale Sicherheit elektrischer und elektronischer Systeme im Fahrzeug [4], während ISO 21448 (SOTIF) Risiken der bestimmungsgemäßen Funktion betrachtet – besonders relevant für Systeme, die auf Sensoren und Wahrnehmungsalgorithmen angewiesen sind [5]. Für Funktionen zur Spur- und Kursführung ist die UN-Regelung Nr. 79 eine wichtige internationale Referenz [6]. ADAS-Entwicklung bedeutet deshalb, funktionale Sicherheit, Zulassung und Leistungsanforderungen als zusammenhängende technische Aufgabe zu behandeln – von der ersten Architekturentscheidung bis zur Erprobung unter realen Bedingungen.',
          references: '[1] Brasilien, Gesetz Nr. 14.902 vom 27. Juni 2024. Programm für grüne Mobilität und Innovation — MOVER. [2] Brasilien, Dekret Nr. 12.435 vom 15. April 2025. [3] Brasilien, Ministerium für Entwicklung, Industrie, Außenhandel und Dienstleistungen. MOVER-Programm, 2026. [4] International Organization for Standardization. ISO 26262:2018. [5] International Organization for Standardization. ISO 21448:2022. [6] Wirtschaftskommission der Vereinten Nationen für Europa. UN-Regelung Nr. 79, 2022.',
        },
        {
          tag: 'ADAS und KI',
          title: 'ADAS, künstliche Intelligenz und eingebettete Systeme',
          text: 'Künstliche Intelligenz erweitert die Wahrnehmungsfähigkeiten von ADAS, insbesondere bei der Bildinterpretation und der Erkennung von Elementen der Fahrbahn. Die Fahrspurerkennung ist für Funktionen wie LDWS und LKAS zentral, weil sie Lage und Geometrie der Fahrbahnmarkierungen schätzt. Forschungsübersichten beschreiben den Übergang von klassischen Bildverarbeitungsverfahren zu Deep-Learning-Architekturen, die Repräsentationen direkt aus Daten lernen [1], [2]. Dieser Fortschritt bringt für automobile Anwendungen eine besondere Herausforderung mit sich: Ein Modell muss gute Wahrnehmung mit Echtzeitverarbeitung, Robustheit und begrenzten Rechenressourcen verbinden. Qin, Wang und Li formulierten mit Ultra Fast Structure-aware Deep Lane Detection (UFLD) die Fahrspurerkennung als zeilenbasierte Auswahlaufgabe, statt ausschließlich auf eine Segmentierung jedes einzelnen Pixels zu setzen [3]. LaneATT von Tabelini et al. nutzt Aufmerksamkeit, um globale Bildinformationen zu erfassen und mit Verdeckungen oder unvollständigen Markierungen umzugehen, ohne die Echtzeitfähigkeit aus dem Blick zu verlieren [4]. Neuere Arbeiten untersuchen außerdem zeitliche Modelle, die aufeinanderfolgende Bilder nutzen, wenn ein einzelnes Bild nicht genügend Informationen liefert [5]. Bei der Auswahl eines ADAS-Algorithmus zählt daher nicht nur die Genauigkeit. Ebenso wichtig sind Latenz, Bilder pro Sekunde, Speicherbedarf, Energieverbrauch und die Stabilität der Vorhersagen. Für eingebettete Systeme muss KI-Forschung deshalb immer mit den praktischen Grenzen der Hardware zusammen gedacht werden.',
          references: '[1] N. J. Zakaria et al., “Lane Detection in Autonomous Vehicles: A Systematic Review,” IEEE Access, Bd. 11, S. 3729–3765, 2023. [2] J. Tang, S. Li und P. Liu, “A Review of Lane Detection Methods Based on Deep Learning,” Pattern Recognition, Bd. 111, 2021. [3] Z. Qin, H. Wang und X. Li, “Ultra Fast Structure-aware Deep Lane Detection,” ECCV, 2020. [4] L. Tabelini et al., “Keep Your Eyes on the Lane: Real-Time Attention-Guided Lane Detection,” CVPR, 2021. [5] Y. Dong et al., “A Hybrid Spatial–Temporal Deep Learning Architecture for Lane Detection,” 2023.',
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
      ctaTitle: 'Gemeinsam etwas Besonderes entwickeln?',
      ctaText: 'Ich freue mich über neue Projekte und anspruchsvolle Aufgaben.',
      ctaButton: 'Kontakt aufnehmen',
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
      intro: 'Sie möchten über ein Projekt sprechen, eine Idee weiterentwickeln oder einfach Kontakt aufnehmen? Hier finden Sie meine wichtigsten Kanäle.',
      availabilityLabel: 'Verfügbar für',
      availabilityText: 'Systementwicklung, Front-End und Back-End sowie die Umsetzung von KI-Modellen – mit Fokus auf die Automobilindustrie und ADAS-Systeme (Advanced Driver-Assistance Systems).',
      emailLabel: 'E-Mail',
      emailDescription: 'Für Projektanfragen, Fragen oder neue Möglichkeiten.',
      linkedInLabel: 'LinkedIn',
      linkedInDescription: 'Beruflicher Werdegang und Erfahrungen in der Softwareentwicklung.',
      githubLabel: 'GitHub',
      githubDescription: 'Repositories, Projekte und aktuelle Programmierstudien.',
      mediaLabel: 'Portfolio-Medien',
      mediaLinkLabel: 'Visuelle Präsentation des Portfolios ansehen',
    },
  };

  getLocale(locale: string | null): Locale {
    return locale === 'en' || locale === 'de' ? locale : 'pt';
  }

  getFlag(locale: Locale): string {
    return this.locales.find((item) => item.locale === locale)?.flag ?? '🇧🇷';
  }
}
