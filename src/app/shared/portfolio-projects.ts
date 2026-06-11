export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  summary?: string;
  role?: string;
  stack?: string[];
  details?: string;
  gallery?: Array<{
    src: string;
    alt: string;
  }>;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    title: 'Aplicativo para monitoramento de sensores',
    description: 'Captação de dados de sensores e monitoramento.',
    image: 'assets/images/image_sensor_study_01.png',
    alt: 'Sensor study 01 preview',
    summary: 'Aplicativo para android que visa captar dados de sensores para ambientes sem conexão com internet.',
    role: 'Mobile App',
    stack: ['Java', 'Room', 'Android Studio', 'Design de interface'],
    details:
      'Projeto pensado para acompanhar dados técnicos com uma interface clara, Arquitetura MVVM com foco em modularidade, testes e facilidade de manutenção. Persistencia local usando Room para garantir que os dados sejam armazenados mesmo sem conexão, com sincronização posterior.Compatibilidade com API 24+ e Nexus +7.',
    gallery: [
      {
        src: 'assets/images/image_sensor_study_02.png',
        alt: 'Sensor study overview 1',
      },
      {
        src: 'assets/images/image_sensor_study_03.png',
        alt: 'Sensor study overview 2',
      },
      {
        src: 'assets/images/image_sensor_study_04.png',
        alt: 'Sensor study overview 3',
      },
    ],
  },
  {
    id: 2,
    title: 'Sistema bancário',
    description: 'Arquitetura de sistema bancário com foco em escalabilidade e organização de serviços.',
    image: 'assets/images/image_banking_system_arch.png',
    alt: 'Banking system architecture preview',
    summary: 'Arquitetura modular para serviços bancários com foco em separação de responsabilidades.',
    role: 'Modelagem e visão arquitetural',
    stack: ['Arquitetura limpa', 'Integração de serviços', 'Segurança'],
    details:
      'Esse projeto foi desenvolvido como um exercício acadêmico para aplicar os pilares da Programação Orientada a Objetos: Herança, Polimorfismo, Encapsulamento e Tratamento de Exceções.',
      gallery: [
      {
        src: 'assets/images/image_banking_system_arch.png',
        alt: 'Banking system architecture overview',
      },
    ],
  },
  {
    id: 3,
    title: 'Sistema de manejo de veiculos',
    description: 'Painel e estrutura para controle de veículos, operações e acompanhamento.',
    image: 'assets/images/image_vehicle_management_system_02.png',
    alt: 'Vehicle management system preview',
    summary: 'Interface para gerenciamento de veículos, cadastros e operação diária.',
    role: 'Painel administrativo e acompanhamento',
    stack: ['Admin dashboard', 'Fluxos CRUD', 'Componentização'],
    details:
    'Sistema de manejo de veículos desenvolvido como um projeto acadêmico para aplicar conceitos de POO, incluindo classes abstratas, herança, polimorfismo, encapsulamento, tratamento de exceções e interfaces. O sistema inclui funcionalidades para cadastro e gerenciamento de veículos, operações diárias e acompanhamento de status, utilizando Java Swing para a interface gráfica e eventos para interatividade.',
    gallery: [
      {
        src: 'assets/images/image_vehicle_management_system_01.png',
        alt: 'Vehicle management system screen 1',
      },
    ],
  },
];
