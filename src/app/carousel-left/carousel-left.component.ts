import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-left',
  imports: [],
  templateUrl: './carousel-left.component.html',
  styleUrl: './carousel-left.component.css',
})
export class CarouselLeftComponent {
  @Input() slideLeft: () => void = () => {};
}
