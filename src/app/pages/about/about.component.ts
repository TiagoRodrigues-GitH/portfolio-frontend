import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I18nService, Locale } from '../../services/i18n.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class AboutComponent implements OnInit {
  locale: Locale = 'pt';

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
    return this.i18n.about[this.locale];
  }

  get resumeUrl(): string {
    return '/curriculo.pdf';
  }
}
