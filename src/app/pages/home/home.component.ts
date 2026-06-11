// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../../shared/portfolio-projects';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredProjects: PortfolioProject[] = PORTFOLIO_PROJECTS.slice(0, 3);

  truncateDescription(description: string): string {
    if (!description) return '';
    const maxLength = 100;
    return description.length > maxLength
      ? description.substring(0, maxLength) + '...'
      : description;
  }
}
