import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosPelisComponent } from './comentarios-pelis.component';

describe('ComentariosPelisComponent', () => {
  let component: ComentariosPelisComponent;
  let fixture: ComponentFixture<ComentariosPelisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosPelisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
