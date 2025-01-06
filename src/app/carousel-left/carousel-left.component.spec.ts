import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselLeftComponent } from './carousel-left.component';

describe('CarouselLeftComponent', () => {
  let component: CarouselLeftComponent;
  let fixture: ComponentFixture<CarouselLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
