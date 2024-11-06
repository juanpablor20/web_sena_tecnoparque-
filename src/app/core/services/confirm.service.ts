import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  private confirmSubject = new Subject<{
    message: string;
    onConfirm: () => void;
  }>();
  confirm$ = this.confirmSubject.asObservable();

  confirm(message: string, onConfirm: () => void) {
    this.confirmSubject.next({ message, onConfirm });
  }
}
