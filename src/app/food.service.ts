import { Injectable } from '@angular/core';
// import foods & makanan-indo
import { Foods } from './foods';
import { MessageService } from './message.service'; 
// import rxjs observable
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private foodsUrl = 'api/lapers'; // url to web api

  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private messageService: MessageService, private http: HttpClient) { }


   /** GET Foods from the server */
  getFoods(): Observable<Foods[]>{
    return this.http.get<Foods[]>(this.foodsUrl).pipe(tap(_ => this.log('fetched food')),
      catchError(this.handleError<Foods[]>('getFoods', []))
    );
  }

  getFood(id: number): Observable<Foods> {
    const url = `${this.foodsUrl}/${id}`;
    return this.http.get<Foods>(url).pipe(
      tap(_ => this.log(`fetched food id=${id}`)),
      catchError(this.handleError<Foods>(`getFood id=${id}`))
    );
  }

  getFoodNo404<Data>(id: number): Observable<Foods> {
    const url = `${this.foodsUrl}/?id=${id}`;
    return this.http.get<Foods[]>(url)
      .pipe(
        map(Foods => Foods[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} food id=${id}`);
        }),
        catchError(this.handleError<Foods>(`getFood id=${id}`))
      );
  }


  
  updateFood(laper: Foods): Observable<any> {
    return this.http.put(this.foodsUrl, laper, this.httpOptions).pipe(
       tap(_ => this.log(`update food id=${laper.id}`)), 
       catchError(this.handleError<any>('update food'))
    );
  }

  // add food
  addFood (laper: Foods): Observable<Foods> {
    return this.http.post<Foods>(this.foodsUrl, laper, this.httpOptions).pipe(tap((newFood: Foods) => this.log(`added food w/ id={newFood.id}`)), catchError(this.handleError<Foods>('addFood'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteFood (laper: Foods | number): Observable<Foods> {
    const id = typeof laper === 'number' ? laper : laper.id;
    const url = `${this.foodsUrl}/${id}`;

    return this.http.delete<Foods>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted food id=${id}`)),
      catchError(this.handleError<Foods>('deleteFood'))
    );
  }

  // search food
  searchFoods(term: string): Observable<Foods[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Foods[]>(`${this.foodsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found food matching "${term}"`)),
      catchError(this.handleError<Foods[]>('searchFoods', []))
    );
  } 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`FoodService: ${message}`);
  }
}
