import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarouselContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tri-carousel';
}
