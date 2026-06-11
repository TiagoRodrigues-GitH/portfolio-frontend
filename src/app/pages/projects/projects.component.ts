import { Component, HostListener } from '@angular/core';
import { PORTFOLIO_PROJECTS } from '../../shared/portfolio-projects';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  profileImage = '/assets/images/perfil_foto.jpeg';
  previewImage: { src: string; alt: string } | null = null;
  activeProjectIndex: number | null = null;
  activeImageIndex = 0;

  projects = PORTFOLIO_PROJECTS;

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
