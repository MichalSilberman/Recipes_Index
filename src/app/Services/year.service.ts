import { Injectable } from '@angular/core';
import { Year } from '../Interfaces/Year';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(
    private http: HttpClient,
  ) { }
  
  private YearsUrl = 'https://localhost:7046/api/Years';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  log(message: string): void {
    console.log(message)
  }
  getYears(): Observable<Year[]> {
    return this.http.get<Year[]>(this.YearsUrl)
  }

  addYear(year: Year): Observable<Year> {
    return this.http.post<Year>(this.YearsUrl, year, this.httpOptions).pipe(
      tap((newYear: Year) => this.log(`added hero w/ id=${newYear.id}`)),
      // catchError(this.handleError<Hero>('addHero'))
    );
  }
}
