import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render language flags in the top bar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const flags = Array.from(compiled.querySelectorAll('.language-flag'));
    const labels = flags.map((flag) => flag.textContent?.trim());
    expect(labels).toContain('BR');
    expect(labels).toContain('EN');
    expect(labels).toContain('DE');
  });
});
