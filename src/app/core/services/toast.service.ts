
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<{
    message: string;
    type: 'success' | 'error' | 'warning';
  }>();
  toast$ = this.toastSubject.asObservable();

  showToast(message: string, type: 'success' | 'error') {
    this.toastSubject.next({ message, type });
  }
}
