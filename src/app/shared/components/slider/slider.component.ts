import { Component, AfterViewInit } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  private sliderInstance: KeenSliderInstance | null = null;

  constructor() { }

  ngAfterViewInit(): void {
    // Image Slider
    const imageSlider = new KeenSlider('#image-slider', {
      loop: true,
      defaultAnimation: {
        duration: 1000
      },
      renderMode: 'custom',
      detailsChanged: (s) => {
        s.slides.forEach((element, idx) => {
          element.style.opacity = String(s.track.details.slides[idx].portion);
        });
      }
    });

    // Text Slider
    const textSlider = new KeenSlider('#text-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 2,
        spacing: 15
      },
      defaultAnimation: {
        duration: 1000
      },
      detailsChanged: (s) => {
        const slides = s.track.details.slides;
        s.slides.forEach((element, idx) => {
          // Aquí se llama a scaleElement
          const divElement = element.querySelector('div') as HTMLElement;
          if (divElement) {
            this.scaleElement(divElement, slides[idx].portion);
          }
        });
      }
    });
  }

  // Función para escalar el elemento según la porción
  private scaleElement(element: HTMLElement, portion: number): void {
    const scale_size = 0.75;
    const scale = 1 - (scale_size - scale_size * portion);
    const scale_style = `scale(${scale})`;
    element.style.transform = scale_style;
    (element.style as any)['-webkit-transform'] = scale_style; // Type assertion here

    // Ajustamos la opacidad en función de la porción
    const opacity = portion === 1 ? 1 : 0.2;
    element.style.opacity = String(opacity);
  }
}
