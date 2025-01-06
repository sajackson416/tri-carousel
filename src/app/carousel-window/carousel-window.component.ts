import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-window',
  imports: [],
  templateUrl: './carousel-window.component.html',
  styleUrl: './carousel-window.component.css',
})
export class CarouselWindowComponent {
  @Input() pathList: string[] = [];
  @Input() activeIndex: number = 0;
}
