
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  
})
export class UtilService {
  showMessage(message: string, duration: number): void {
    console.log(`Message: ${message} (Duration: ${duration}ms)`);
  }
}
