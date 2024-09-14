import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Idictionary } from "./dictionary";
import { catchError, map, Observable, throwError } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class dictionaryservice {
  constructor(private http: HttpClient) { }
  // to get data from api 
  getDicionary(word: string): Observable<Idictionary> {
    return this.http.get<Idictionary[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).pipe(
      map(data => {
        //to define dictionary properties
        let dic: Idictionary = {
          word: data[0].word,
          phonetic: data[0].phonetic,
          phonetics: data[0].phonetics,
          meanings: data[0].meanings,
          license: data[0].license,
          sourceUrls: data[0].sourceUrls
        };
        return dic;
      }),
      catchError(this.handleException)
    );
  }
  private handleException(err: HttpErrorResponse) {
    let errormessage = '';
    if (err.error instanceof ErrorEvent) {
      errormessage = `Error: ${err.error.message}`;
    }
    else {
      errormessage = `Error: ${err.message}`;
    }
    return throwError(() => errormessage);
  }
}
