import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImagenPelisComponent } from './banner-imagen-pelis.component';

describe('BannerImagenPelisComponent', () => {
  let component: BannerImagenPelisComponent;
  let fixture: ComponentFixture<BannerImagenPelisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerImagenPelisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerImagenPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
