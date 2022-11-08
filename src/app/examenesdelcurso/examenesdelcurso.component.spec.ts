import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesdelcursoComponent } from './examenesdelcurso.component';

describe('ExamenesdelcursoComponent', () => {
  let component: ExamenesdelcursoComponent;
  let fixture: ComponentFixture<ExamenesdelcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesdelcursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenesdelcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
