import { Component } from '@angular/core';
import { CarouselIndicatorsComponent } from '../carousel-indicators/carousel-indicators.component';
import { CarouselLeftComponent } from '../carousel-left/carousel-left.component';
import { CarouselRightComponent } from '../carousel-right/carousel-right.component';
import { CarouselWindowComponent } from '../carousel-window/carousel-window.component';

@Component({
  selector: 'app-carousel-container',
  imports: [
    CarouselIndicatorsComponent,
    CarouselLeftComponent,
    CarouselRightComponent,
    CarouselWindowComponent,
  ],
  templateUrl: './carousel-container.component.html',
  styleUrl: './carousel-container.component.css',
})
export class CarouselContainerComponent {
  paths = [
    '/kr1.png',
    '/kr2.png',
    '/kr3.png',
    '/Coruscant_V1_KR.png',
    '/Coruscant_V2_KR.png',
    '/Tattooine_V1_KR.png',
  ];
  activeIndex = 0;

  slideLeft = () => {
    this.activeIndex =
      this.activeIndex === 0 ? this.paths.length - 1 : this.activeIndex - 1;

    let images = document.getElementById('repeater')?.children;
    if (!images) return;
    for (let i = 0; i < 5; i++) {
      console.log(images[i]);
    }
  };

  slideRight = () => {
    this.activeIndex =
      this.activeIndex === this.paths.length - 1 ? 0 : this.activeIndex + 1;
  };

  slideTo = (index: number) => {
    this.activeIndex = index;
  };
}
