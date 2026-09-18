import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I18nService, Locale } from '../../services/i18n.service';
import { PORTFOLIO_PROJECTS } from '../../shared/portfolio-projects';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent implements OnInit {
  profileImage = 'assets/images/perfil_foto.jpeg';
  previewImage: { src: string; alt: string } | null = null;
  activeProjectIndex: number | null = null;
  activeImageIndex = 0;
  locale: Locale = 'pt';

  projects = PORTFOLIO_PROJECTS;

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
    return {
      portfolio: this.locale === 'en' ? 'Portfolio' : this.locale === 'de' ? 'Portfolio' : 'Portfólio',
      developed: this.locale === 'en' ? 'Selected projects' : this.locale === 'de' ? 'Ausgewählte Projekte' : 'Projetos selecionados',
      role: this.locale === 'en' ? 'Role' : this.locale === 'de' ? 'Rolle' : 'Função',
      stack: 'Stack',
      openImage: this.locale === 'en' ? 'Open image of' : this.locale === 'de' ? 'Bild öffnen:' : 'Abrir imagem de',
      previous: this.locale === 'en' ? 'Previous image' : this.locale === 'de' ? 'Vorheriges Bild' : 'Imagem anterior',
      next: this.locale === 'en' ? 'Next image' : this.locale === 'de' ? 'Nächstes Bild' : 'Próxima imagem',
      close: this.locale === 'en' ? 'Close image' : this.locale === 'de' ? 'Bild schließen' : 'Fechar imagem',
      profile: this.locale === 'en' ? 'Software developer' : this.locale === 'de' ? 'Softwareentwickler' : 'Desenvolvedor de software',
    };
  }

  get pageBackground(): string {
    return 'radial-gradient(circle at top left, rgba(96, 165, 250, 0.18), transparent 32%), linear-gradient(rgba(234, 244, 255, 0.84), rgba(223, 238, 255, 0.88)), url("assets/images/image_projetos.png.jpg")';
  }

  get localizedProjects() {
    const translations: Record<Locale, Record<number, Partial<typeof this.projects[number]>>> = {
      pt: {
        1: {
          title: 'Sistema de manejo de veículos',
          description: 'Painel e estrutura para controle de veículos, operações e acompanhamento.',
          summary: 'Interface para gerenciamento de veículos, cadastros e operação diária.',
          role: 'Painel administrativo e acompanhamento',
          stack: ['Dashboard administrativo', 'Fluxos CRUD', 'Componentização'],
          details: 'Sistema acadêmico para gerenciamento de veículos, operações diárias e status, desenvolvido com POO, Java Swing e interfaces orientadas a eventos.',
        },
        2: {
          title: 'Sistema bancário',
          description: 'Arquitetura de sistema bancário com foco em escalabilidade e organização de serviços.',
          summary: 'Arquitetura modular para serviços bancários com foco em separação de responsabilidades.',
          role: 'Modelagem e visão arquitetural',
          stack: ['Arquitetura limpa', 'Integração de serviços', 'Segurança'],
          details: 'Exercício acadêmico para aplicar herança, polimorfismo, encapsulamento e tratamento de exceções.',
        },
        3: {
          title: 'Aplicativo para monitoramento de sensores',
          description: 'Captação de dados de sensores e monitoramento.',
          summary: 'Aplicativo Android para captar dados de sensores em ambientes sem conexão com a internet.',
          role: 'Aplicativo mobile',
          details: 'Aplicativo com arquitetura MVVM e persistência local usando Room para armazenar dados sem conexão e sincronizar depois.',
        },
      },
      en: {
        1: {
          title: 'Vehicle management system',
          description: 'Dashboard and structure for vehicle control, operations and tracking.',
          summary: 'Interface for vehicle management, registration and daily operations.',
          role: 'Administrative dashboard and tracking',
          stack: ['Admin dashboard', 'CRUD workflows', 'Component architecture'],
          details: 'Academic system for vehicle management, daily operations and status tracking, developed with OOP, Java Swing and event-driven interfaces.',
        },
        2: {
          title: 'Banking system',
          description: 'Banking system architecture focused on scalability and service organization.',
          summary: 'Modular architecture for banking services focused on separation of responsibilities.',
          role: 'Modeling and architectural view',
          stack: ['Clean architecture', 'Service integration', 'Security'],
          details: 'Academic exercise applying inheritance, polymorphism, encapsulation and exception handling.',
        },
        3: {
          title: 'Sensor monitoring application',
          description: 'Sensor data collection and monitoring.',
          summary: 'Android application that captures sensor data in environments without internet access.',
          role: 'Mobile application',
          details: 'MVVM application with local Room persistence to store data offline and synchronize it later.',
        },
      },
      de: {
        1: {
          title: 'Fahrzeugmanagementsystem',
          description: 'Anwendung für Fahrzeugverwaltung, Abläufe und Statusübersicht.',
          summary: 'Anwendung für Fahrzeugverwaltung, Erfassung und tägliche Abläufe.',
          role: 'Administration und Prozessüberblick',
          stack: ['Admin-Dashboard', 'CRUD-Abläufe', 'Komponentenarchitektur'],
          details: 'Akademisches System zur Fahrzeugverwaltung und Statusübersicht, entwickelt mit objektorientierter Programmierung, Java Swing und ereignisgesteuerten Oberflächen.',
        },
        2: {
          title: 'Bankensystem',
          description: 'Architektur eines Bankensystems mit Fokus auf Skalierbarkeit und klare Services.',
          summary: 'Modulare Architektur für Bankdienste mit klarer Trennung der Verantwortlichkeiten.',
          role: 'Modellierung und Architektur',
          stack: ['Saubere Architektur', 'Service-Integration', 'Sicherheit'],
          details: 'Akademische Arbeit zu Vererbung, Polymorphismus, Kapselung und Ausnahmebehandlung.',
        },
        3: {
          title: 'Anwendung zur Sensorüberwachung',
          description: 'Erfassung und Auswertung von Sensordaten.',
          summary: 'Android-Anwendung zur Erfassung von Sensordaten ohne Internetverbindung.',
          role: 'Mobile Anwendung',
          details: 'MVVM-Anwendung mit lokaler Room-Datenbank. Die Daten bleiben offline verfügbar und können später synchronisiert werden.',
        },
      },
    };

    return this.projects.map((project) => ({ ...project, ...translations[this.locale][project.id] }));
  }

  openImage(projectIndex: number, imageIndex: number): void {
    this.activeProjectIndex = projectIndex;
    this.activeImageIndex = imageIndex;
    this.syncPreviewImage();
  }

  closeImage(): void {
    this.previewImage = null;
    this.activeProjectIndex = null;
    this.activeImageIndex = 0;
  }

  showPreviousImage(): void {
    if (this.activeProjectIndex === null) {
      return;
    }

    const gallery = this.getActiveGallery();
    if (gallery.length <= 1) {
      return;
    }

    this.activeImageIndex = (this.activeImageIndex - 1 + gallery.length) % gallery.length;
    this.syncPreviewImage();
  }

  showNextImage(): void {
    if (this.activeProjectIndex === null) {
      return;
    }

    const gallery = this.getActiveGallery();
    if (gallery.length <= 1) {
      return;
    }

    this.activeImageIndex = (this.activeImageIndex + 1) % gallery.length;
    this.syncPreviewImage();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeImage();
  }

  @HostListener('document:keydown.arrowLeft')
  onArrowLeft(): boolean {
    if (this.previewImage) {
      this.showPreviousImage();
      return false;
    }

    return true;
  }

  @HostListener('document:keydown.arrowRight')
  onArrowRight(): boolean {
    if (this.previewImage) {
      this.showNextImage();
      return false;
    }

    return true;
  }

  get activeProject() {
    return this.activeProjectIndex === null ? null : this.projects[this.activeProjectIndex];
  }

  get hasMultipleImages(): boolean {
    return this.getActiveGallery().length > 1;
  }

  private getActiveGallery(): Array<{ src: string; alt: string }> {
    return this.activeProject?.gallery?.length ? this.activeProject.gallery : [];
  }

  private syncPreviewImage(): void {
    const gallery = this.getActiveGallery();
    const currentImage = gallery[this.activeImageIndex];

    if (currentImage) {
      this.previewImage = currentImage;
      return;
    }

    this.previewImage = null;
    this.activeProjectIndex = null;
    this.activeImageIndex = 0;
  }
}
