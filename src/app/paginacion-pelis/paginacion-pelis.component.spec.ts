import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacionPelisComponent } from './paginacion-pelis.component';

describe('PaginacionPelisComponent', () => {
  let component: PaginacionPelisComponent;
  let fixture: ComponentFixture<PaginacionPelisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginacionPelisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacionPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
