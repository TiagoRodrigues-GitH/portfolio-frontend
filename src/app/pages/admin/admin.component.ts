import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { AuthService } from '../../services/auth.service';
import { I18nService, Locale } from '../../services/i18n.service';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],
})
export class AdminComponent implements OnInit {
  projects: Project[] = [];
  newProject: Project = {
    title: '',
    description: '',
    mediaUrl: '',
    mediaType: 'IMAGE',
    thumbnailUrl: '',
    projectUrl: '',
    published: false,
    displayOrder: 0
  };
  isLoading = false;
  isCheckingAuth = true;
  editingId: number | null = null;
  successMessage = '';
  errorMessage = '';
  locale: Locale = 'pt';

  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public i18n: I18nService,
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.locale = this.i18n.getLocale(params.get('lang'));
    });
    this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: '/admin' } });
        return;
      }

      this.isCheckingAuth = false;
      this.loadProjects();
    });
  }

  get t() {
    return {
      panel: this.locale === 'en' ? 'Admin panel' : this.locale === 'de' ? 'Admin-Bereich' : 'Painel Administrativo',
      verify: this.locale === 'en' ? 'Verifying authentication...' : this.locale === 'de' ? 'Authentifizierung wird überprüft...' : 'Verificando autenticação...',
      createNew: this.locale === 'en' ? 'Create new project' : this.locale === 'de' ? 'Neues Projekt erstellen' : 'Criar Novo Projeto',
      editProject: this.locale === 'en' ? 'Edit project' : this.locale === 'de' ? 'Projekt bearbeiten' : 'Editar Projeto',
      title: this.locale === 'en' ? 'Title' : this.locale === 'de' ? 'Titel' : 'Título',
      description: this.locale === 'en' ? 'Description' : this.locale === 'de' ? 'Beschreibung' : 'Descrição',
      published: this.locale === 'en' ? 'Published' : this.locale === 'de' ? 'Veröffentlicht' : 'Publicado',
      order: this.locale === 'en' ? 'Display order' : this.locale === 'de' ? 'Anzeigereihenfolge' : 'Ordem de exibição',
      create: this.locale === 'en' ? 'Create project' : this.locale === 'de' ? 'Projekt erstellen' : 'Criar Projeto',
      update: this.locale === 'en' ? 'Update project' : this.locale === 'de' ? 'Projekt aktualisieren' : 'Atualizar Projeto',
      cancel: this.locale === 'en' ? 'Cancel' : this.locale === 'de' ? 'Abbrechen' : 'Cancelar',
      list: this.locale === 'en' ? 'My projects' : this.locale === 'de' ? 'Meine Projekte' : 'Meus Projetos',
      loading: this.locale === 'en' ? 'Loading projects...' : this.locale === 'de' ? 'Projekte werden geladen...' : 'Carregando projetos...',
      empty: this.locale === 'en' ? 'No project created yet.' : this.locale === 'de' ? 'Noch kein Projekt erstellt.' : 'Nenhum projeto criado ainda.',
      mediaUrl: this.locale === 'en' ? 'Media URL' : this.locale === 'de' ? 'Medien-URL' : 'URL da Mídia',
      mediaType: this.locale === 'en' ? 'Media type' : this.locale === 'de' ? 'Medientyp' : 'Tipo de Mídia',
      thumbnailUrl: this.locale === 'en' ? 'Thumbnail URL' : this.locale === 'de' ? 'Thumbnail-URL' : 'URL da Thumbnail',
      projectUrl: this.locale === 'en' ? 'Project URL' : this.locale === 'de' ? 'Projekt-URL' : 'URL do Projeto',
      image: this.locale === 'en' ? 'Image' : this.locale === 'de' ? 'Bild' : 'Imagem',
      video: this.locale === 'en' ? 'Video' : this.locale === 'de' ? 'Video' : 'Vídeo',
      id: 'ID',
      actions: this.locale === 'en' ? 'Actions' : this.locale === 'de' ? 'Aktionen' : 'Ações',
      yes: this.locale === 'en' ? 'Yes' : this.locale === 'de' ? 'Ja' : 'Sim',
      no: this.locale === 'en' ? 'No' : this.locale === 'de' ? 'Nein' : 'Não',
      edit: this.locale === 'en' ? 'Edit' : this.locale === 'de' ? 'Bearbeiten' : 'Editar',
      delete: this.locale === 'en' ? 'Delete' : this.locale === 'de' ? 'Löschen' : 'Deletar',
      titlePlaceholder: this.locale === 'en' ? 'Enter the project title' : this.locale === 'de' ? 'Projekttitel eingeben' : 'Digite o título do projeto',
      descriptionPlaceholder: this.locale === 'en' ? 'Enter the project description' : this.locale === 'de' ? 'Projektbeschreibung eingeben' : 'Digite a descrição do projeto',
      mediaUrlPlaceholder: this.locale === 'en' ? 'https://example.com/image.jpg' : this.locale === 'de' ? 'https://beispiel.de/bild.jpg' : 'https://exemplo.com/imagem.jpg',
      thumbnailUrlPlaceholder: this.locale === 'en' ? 'https://example.com/thumbnail.jpg' : this.locale === 'de' ? 'https://beispiel.de/thumbnail.jpg' : 'https://exemplo.com/thumbnail.jpg',
      projectUrlPlaceholder: this.locale === 'en' ? 'https://example.com' : this.locale === 'de' ? 'https://beispiel.de' : 'https://exemplo.com',
      loadError: this.locale === 'en' ? 'The projects could not be loaded.' : this.locale === 'de' ? 'Die Projekte konnten nicht geladen werden.' : 'Não foi possível carregar os projetos.',
      required: this.locale === 'en' ? 'Please fill in all required fields.' : this.locale === 'de' ? 'Bitte füllen Sie alle Pflichtfelder aus.' : 'Por favor, preencha os campos obrigatórios',
      createSuccess: this.locale === 'en' ? 'Project created successfully.' : this.locale === 'de' ? 'Projekt erfolgreich erstellt.' : 'Projeto criado com sucesso!',
      createError: this.locale === 'en' ? 'Could not create the project. Check the backend and your permissions.' : this.locale === 'de' ? 'Das Projekt konnte nicht erstellt werden. Bitte prüfen Sie Backend und Berechtigungen.' : 'Erro ao criar o projeto. Verifique o backend e suas permissões.',
      updateSuccess: this.locale === 'en' ? 'Project updated successfully.' : this.locale === 'de' ? 'Projekt erfolgreich aktualisiert.' : 'Projeto atualizado com sucesso!',
      updateError: this.locale === 'en' ? 'Could not update the project.' : this.locale === 'de' ? 'Das Projekt konnte nicht aktualisiert werden.' : 'Erro ao atualizar o projeto.',
      deleteSuccess: this.locale === 'en' ? 'Project deleted successfully.' : this.locale === 'de' ? 'Projekt erfolgreich gelöscht.' : 'Projeto deletado com sucesso!',
      deleteError: this.locale === 'en' ? 'Could not delete the project.' : this.locale === 'de' ? 'Das Projekt konnte nicht gelöscht werden.' : 'Erro ao deletar o projeto.',
      deleteConfirm: this.locale === 'en' ? 'Are you sure you want to delete this project?' : this.locale === 'de' ? 'Möchten Sie dieses Projekt wirklich löschen?' : 'Tem certeza que deseja deletar este projeto?',
    };
  }

  loadProjects() {
    this.isLoading = true;
    this.errorMessage = '';
    this.projectService.getProjects().subscribe({
      next: (data: any) => {
        this.projects = data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Erro ao carregar projetos:', error);
        this.errorMessage = this.t.loadError;
        this.isLoading = false;
      }
    });
  }

  createProject() {
    if (!this.newProject.title || !this.newProject.description) {
      alert(this.t.required);
      return;
    }

    this.projectService.createProject(this.newProject).subscribe({
      next: (data: any) => {
        this.projects.push(data);
        this.resetForm();
        this.successMessage = this.t.createSuccess;
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (error: any) => {
        console.error('Erro:', error);
        this.errorMessage = this.t.createError;
      }
    });
  }

  updateProject() {
    if (this.editingId === null || !this.newProject.title) {
      alert(this.t.required);
      return;
    }

    this.projectService.updateProject(this.editingId, this.newProject).subscribe({
      next: (data: any) => {
        const index = this.projects.findIndex((p: Project) => p.id === this.editingId);
        if (index > -1) {
          this.projects[index] = data;
        }
        this.resetForm();
        this.successMessage = this.t.updateSuccess;
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (error: any) => {
        console.error('Erro:', error);
        this.errorMessage = this.t.updateError;
      }
    });
  }

  deleteProject(id: number | undefined) {
    if (!id) return;

    if (confirm(this.t.deleteConfirm)) {
      this.projectService.deleteProject(id).subscribe({
        next: () => {
          this.projects = this.projects.filter((p: Project) => p.id !== id);
          this.successMessage = this.t.deleteSuccess;
          setTimeout(() => this.successMessage = '', 3000);
        },
        error: (error: any) => {
          console.error('Erro:', error);
          this.errorMessage = this.t.deleteError;
        }
      });
    }
  }

  editProject(project: Project) {
    this.newProject = { ...project };
    this.editingId = project.id || null;
  }

  resetForm() {
    this.newProject = {
      title: '',
      description: '',
      mediaUrl: '',
      mediaType: 'IMAGE',
      thumbnailUrl: '',
      projectUrl: '',
      published: false,
      displayOrder: 0
    };
    this.editingId = null;
  }

  submitForm() {
    if (this.editingId) {
      this.updateProject();
    } else {
      this.createProject();
    }
  }
}
