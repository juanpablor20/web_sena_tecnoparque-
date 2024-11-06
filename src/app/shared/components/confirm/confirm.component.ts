import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmService } from '../../../core/services/confirm.service'; // Ajusta la ruta según sea necesario
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [CommonModule],
    // Importa los módulos necesarios
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit, OnDestroy {
  show = false;
  message = '';
  private onConfirm!: () => void;
  private confirmSubscription!: Subscription;

  constructor(private confirmService: ConfirmService) {}

  ngOnInit() {
    this.confirmSubscription = this.confirmService.confirm$.subscribe(({ message, onConfirm }) => {
      this.message = message;
      this.onConfirm = onConfirm;
      this.show = true;
    });
  }

  hide() {
    this.show = false;
  }

  confirm() {
    if (this.onConfirm) {
      this.onConfirm();
    }
    this.hide();
  }

  ngOnDestroy() {
    if (this.confirmSubscription) {
      this.confirmSubscription.unsubscribe();
    }
  }
}
