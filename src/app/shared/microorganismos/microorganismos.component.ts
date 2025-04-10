import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, ViewChild, Inject, PLATFORM_ID, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-microorganismos',
  standalone: true,
  animations: [
    trigger('cardAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(100px)',
        })
      ),
      transition('hide => show', [animate('600ms ease-out')]),
      transition('show => hide', [animate('300ms ease-in')]),
    ]),
  ],
  imports: [RouterLink, CommonModule],
  templateUrl: './microorganismos.component.html',
  styleUrl: './microorganismos.component.css',
})
export class MicroorganismosComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('micoorganismosSection') micoorganismosSection!: ElementRef<HTMLElement>;
  public animationStates: string[] = [];
  private isAnimating = false;
  private observer: IntersectionObserver | null = null;
  private visibilityTimeout: any = null;

  public levaduras = [
    {
      title: 'Mirador Monte Café',
      description: 'Levadura utilizada en la fermentación de cacao',
      image: 'assets/img/banner-1.webp',
      link: 'https://lalcocoayeast.com/es/products/',
    },
    {
      title: 'Fermentación con levadura MATUNDA',
      description: 'Levadura utilizada en la fermentación de cacao',
      image: 'assets/img/banner-2.webp',
      link: 'https://lalcocoayeast.com/es/products/',
    },
    {
      title: 'Fermentación con levadura CIMA',
      description: 'Levadura utilizada en la fermentación de Café',
      image: 'assets/img/banner-3.webp',
      link: 'https://www.lalcafeyeast.com/es/products/',
    },
    {
      title: 'Fermentación con levadura INTENSO',
      description: 'Levadura utilizada en la fermentación de Café',
      image: 'assets/img/banner-4.webp',
      link: 'https://www.lalcafeyeast.com/es/products/',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Inicializa todos los estados como 'hide'
    this.animationStates = new Array(this.levaduras.length).fill('hide');
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollAnimation();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.visibilityTimeout) {
      clearTimeout(this.visibilityTimeout);
    }
  }

  private setupScrollAnimation() {
    if (!this.micoorganismosSection?.nativeElement) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isAnimating) {
          this.showCards();
        } else if (!entry.isIntersecting) {
          this.hideCards();
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    this.observer.observe(this.micoorganismosSection.nativeElement);
  }

  private checkVisibility() {
    if (!this.micoorganismosSection?.nativeElement || !isPlatformBrowser(this.platformId)) return;
    
    const element = this.micoorganismosSection.nativeElement;
    const rect = element.getBoundingClientRect();
    const isVisible = (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
    
    if (isVisible && !this.isAnimating && this.animationStates.length > 0) {
      this.showCards();
    }
  }

  private showCards() {
    if (this.isAnimating || this.animationStates.length === 0) return;
    
    this.isAnimating = true;
    this.animationStates = this.animationStates.map(() => 'hide');
    
    this.animationStates.forEach((_, index) => {
      setTimeout(() => {
        if (index < this.animationStates.length) {
          this.animationStates[index] = 'show';
        }
        if (index === this.animationStates.length - 1) {
          this.isAnimating = false;
        }
      }, index * 150);
    });
  }

  private hideCards() {
    this.animationStates = this.animationStates.map(() => 'hide');
  }
}