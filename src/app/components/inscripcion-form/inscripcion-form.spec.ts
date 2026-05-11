import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionForm } from './inscripcion-form';

describe('InscripcionForm', () => {
  let component: InscripcionForm;
  let fixture: ComponentFixture<InscripcionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionForm],
    }).compileComponents();

    fixture = TestBed.createComponent(InscripcionForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
