// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../../shared/portfolio-projects';
import { I18nService, Locale } from '../../services/i18n.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProjects: PortfolioProject[] = PORTFOLIO_PROJECTS.slice(0, 3);
  locale: Locale = 'pt';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const nextLocale = this.i18n.getLocale(params.get('lang'));
      this.locale = nextLocale;
    });
  }

  get t() {
    return this.i18n.home[this.locale];
  }

  get heroBackground(): string {
    return 'linear-gradient(135deg, rgba(11, 59, 117, 0.72), rgba(29, 78, 216, 0.72)), url("assets/images/home.png")';
  }

  truncateDescription(description: string): string {
    if (!description) return '';
    const maxLength = 100;
    return description.length > maxLength
      ? description.substring(0, maxLength) + '...'
      : description;
  }

  openProjects(): void {
    this.router.navigate(['/projects'], { queryParams: { lang: this.locale } }).then(() => {
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
    });
  }

  openContact(): void {
    this.router.navigate(['/contact'], { queryParams: { lang: this.locale } }).then(() => {
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
    });
  }
}
