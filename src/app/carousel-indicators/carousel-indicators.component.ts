import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-indicators',
  imports: [],
  templateUrl: './carousel-indicators.component.html',
  styleUrl: './carousel-indicators.component.css',
})
export class CarouselIndicatorsComponent implements OnInit {
  @Input() pathList: string[] = [];
  @Input() slideToI: (index: number) => void = (i) => {};
  @Input() activeI: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
