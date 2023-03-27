import { Injectable } from '@angular/core';
import { Tariff } from './tariff.model';
import { TARIFFS } from './mock-tariffs';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor() { }

  // get all tariffs
  getAll(): Observable<Tariff[]> {
    const tariffs = of(TARIFFS);
    return tariffs
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
