import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  show = false;
  message = '';
  toastType: 'success' | 'error' | 'warning' = 'success';
  iconClass: string = '';
  private toastSubscription!: Subscription;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastSubscription = this.toastService.toast$.subscribe((toast) => {
      this.message = toast.message;
      this.toastType = toast.type;
      this.show = true;
      this.setIconClass();
      setTimeout(() => this.hide(), 3000); // Hide after 3 seconds
    });
  }

  hide() {
    this.show = false;
  }

  private setIconClass() {
    switch (this.toastType) {
      case 'success':
        this.iconClass =
          'text-green-500 bg-green-100 ';
        break;
      case 'error':
        this.iconClass =
          'text-red-500 bg-red-100';
        break;
      case 'warning':
        this.iconClass =
          'text-orange-500 bg-orange-100';
        break;
    }
  }

  ngOnDestroy() {
    if (this.toastSubscription) {
      this.toastSubscription.unsubscribe();
    }
  }
}
