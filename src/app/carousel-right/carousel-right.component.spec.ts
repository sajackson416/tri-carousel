import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselRightComponent } from './carousel-right.component';

describe('CarouselRightComponent', () => {
  let component: CarouselRightComponent;
  let fixture: ComponentFixture<CarouselRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
