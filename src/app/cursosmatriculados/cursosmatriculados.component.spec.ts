import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosmatriculadosComponent } from './cursosmatriculados.component';

describe('CursosmatriculadosComponent', () => {
  let component: CursosmatriculadosComponent;
  let fixture: ComponentFixture<CursosmatriculadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosmatriculadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosmatriculadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
