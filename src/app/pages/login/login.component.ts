import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/auth.model';
import { I18nService, Locale } from '../../services/i18n.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent implements OnInit {
  credentials: LoginRequest = {
    email: '',
    password: ''
  };
  isLoading = false;
  errorMessage = '';
  showPassword = false;
  locale: Locale = 'pt';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private i18n: I18nService,
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.locale = this.i18n.getLocale(params.get('lang'));
    });

    // If already authenticated, redirect to admin
    this.authService.isAuthenticated().subscribe(isAuth => {
      if (isAuth) {
        this.router.navigate(['/admin']);
      }
    });
  }

  login() {
    if (!this.credentials.email || !this.credentials.password) {
      this.errorMessage = this.t.required;
      return;
    }

    if (!this.isValidEmail(this.credentials.email)) {
      this.errorMessage = this.t.invalidEmail;
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.credentials).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/admin']);
      },
      error: (error: any) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || this.t.loginError;
        console.error('Erro de autenticação:', error);
      }
    });
  }

  get t() {
    return {
      title: this.locale === 'en' ? 'Administrative access' : this.locale === 'de' ? 'Administrativer Zugang' : 'Acesso Administrativo',
      intro: this.locale === 'en' ? 'Sign in with your credentials' : this.locale === 'de' ? 'Mit Ihren Zugangsdaten anmelden' : 'Entre com suas credenciais',
      password: this.locale === 'en' ? 'Password' : this.locale === 'de' ? 'Passwort' : 'Senha',
      passwordPlaceholder: this.locale === 'en' ? 'Enter your password' : this.locale === 'de' ? 'Passwort eingeben' : 'Digite sua senha',
      loading: this.locale === 'en' ? 'Signing in...' : this.locale === 'de' ? 'Anmeldung läuft ...' : 'Autenticando...',
      submit: this.locale === 'en' ? 'Sign in' : this.locale === 'de' ? 'Anmelden' : 'Entrar',
      footer: this.locale === 'en' ? 'No access? Contact the administrator.' : this.locale === 'de' ? 'Kein Zugang? Wenden Sie sich an die Administration.' : 'Não tem acesso? Entre em contato com o administrador.',
      required: this.locale === 'en' ? 'Please fill in all fields.' : this.locale === 'de' ? 'Bitte füllen Sie alle Felder aus.' : 'Por favor, preencha todos os campos',
      invalidEmail: this.locale === 'en' ? 'Please enter a valid email address.' : this.locale === 'de' ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' : 'Por favor, digite um email válido',
      loginError: this.locale === 'en' ? 'Sign-in failed. Check your credentials.' : this.locale === 'de' ? 'Die Anmeldung ist fehlgeschlagen. Bitte prüfen Sie Ihre Zugangsdaten.' : 'Erro ao fazer login. Verifique suas credenciais.',
    };
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
