import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { AuthService } from '../../services/auth.service';

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

  constructor(
    private projectService: ProjectService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: '/admin' } });
        return;
      }

      this.isCheckingAuth = false;
      this.loadProjects();
    });
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
        this.errorMessage = 'Não foi possível carregar os projetos.';
        this.isLoading = false;
      }
    });
  }

  createProject() {
    if (!this.newProject.title || !this.newProject.description) {
      alert('Por favor, preencha os campos obrigatórios');
      return;
    }

    this.projectService.createProject(this.newProject).subscribe({
      next: (data: any) => {
        this.projects.push(data);
        this.resetForm();
        this.successMessage = 'Projeto criado com sucesso!';
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (error: any) => {
        console.error('Erro:', error);
        this.errorMessage = 'Erro ao criar o projeto. Verifique o backend e suas permissões.';
      }
    });
  }

  updateProject() {
    if (this.editingId === null || !this.newProject.title) {
      alert('Por favor, preencha os campos obrigatórios');
      return;
    }

    this.projectService.updateProject(this.editingId, this.newProject).subscribe({
      next: (data: any) => {
        const index = this.projects.findIndex((p: Project) => p.id === this.editingId);
        if (index > -1) {
          this.projects[index] = data;
        }
        this.resetForm();
        this.successMessage = 'Projeto atualizado com sucesso!';
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (error: any) => {
        console.error('Erro:', error);
        this.errorMessage = 'Erro ao atualizar o projeto.';
      }
    });
  }

  deleteProject(id: number | undefined) {
    if (!id) return;

    if (confirm('Tem certeza que deseja deletar este projeto?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => {
          this.projects = this.projects.filter((p: Project) => p.id !== id);
          this.successMessage = 'Projeto deletado com sucesso!';
          setTimeout(() => this.successMessage = '', 3000);
        },
        error: (error: any) => {
          console.error('Erro:', error);
          this.errorMessage = 'Erro ao deletar o projeto.';
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
