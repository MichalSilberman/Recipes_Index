import { Injectable } from '@angular/core';
import { Month } from '../Interfaces/Month';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonthService {
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  }
  constructor(
    private http: HttpClient,
  ) { }

  private monthUrl = 'https://localhost:7046/api/Months';

  getMonths(): Observable<Month[]> {
    // const months = of(MONTHS)
    // return months;
    return this.http.get<Month[]>(this.monthUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Month[]>('getMonths', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
