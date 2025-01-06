import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWindowComponent } from './carousel-window.component';

describe('CarouselWindowComponent', () => {
  let component: CarouselWindowComponent;
  let fixture: ComponentFixture<CarouselWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
