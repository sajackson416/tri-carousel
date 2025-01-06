import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-right',
  imports: [],
  templateUrl: './carousel-right.component.html',
  styleUrl: './carousel-right.component.css',
})
export class CarouselRightComponent {
  @Input() slideRight: () => void = () => {};
}
