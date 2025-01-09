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

    const repeater = document.getElementById('repeater');
    let images = repeater?.children;
    if (!repeater || !images) return;
    // (images[0] as HTMLMediaElement).classList.add('left-img');
    (images[0] as HTMLMediaElement).classList.remove('ghost-img');

    // let curr_translation = parseFloat(
    //   (repeater.style.transform.match(/\((.*)%/) || [0, '0'])[1]
    // );
    // console.log(curr_translation);
    // repeater.style.transform = `translateX(${
    //   curr_translation + 33.333333333
    // }%)`;

    for (let i = 0; i < images.length; i++) {
      let image = images[i] as HTMLElement;
      let curr_translation = parseInt(
        (image.style.transform.match(/\((.*)%/) || [0, '0'])[1]
      );
      image.style.transform = `translateX(${curr_translation + 100}%)`;
    }

    // (images[0] as HTMLMediaElement).classList.remove('left-img');

    (images[3] as HTMLMediaElement).classList.add('ghost-img');

    let last = images[4] as HTMLMediaElement;
    last.src =
      this.paths[
        (this.paths.length + this.activeIndex - 2) % this.paths.length
      ];
    // last.classList.add('left-img');
    repeater.prepend(last);
  };

  slideRight = () => {
    this.activeIndex =
      this.activeIndex === this.paths.length - 1 ? 0 : this.activeIndex + 1;

    const repeater = document.getElementById('repeater');
    let images = repeater?.children;
    if (!repeater || !images) return;

    (images[4] as HTMLMediaElement).classList.remove('ghost-img');

    // let curr_translation = parseFloat(
    //   (repeater.style.transform.match(/\((.*)%/) || [0, '0'])[1]
    // );
    // console.log(curr_translation);
    // repeater.style.transform = `translateX(${
    //   curr_translation - 33.333333333
    // }%)`;

    // for (let i = 0; i < images.length; i++) {
    //   let image = images[i] as HTMLElement;
    //   let curr_translation = parseInt(
    //     (image.style.transform.match(/\((.*)%/) || [0, '0'])[1]
    //   );
    //   image.style.transform = `translateX(${curr_translation - 100}%)`;
    // }

    (images[1] as HTMLMediaElement).classList.add('ghost-img');

    (images[0] as HTMLMediaElement).src =
      this.paths[(this.activeIndex + 2) % this.paths.length];
    repeater.append(images[0]);
  };

  slideTo = (index: number) => {
    this.activeIndex = index;
  };
}
