import { HttpClient } from "@angular/common/http";
import { Injectable, OnChanges, SimpleChanges } from "@angular/core";
import { Idictionary } from "./dictionary";
import { map, Observable, take, tap } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class dictionaryservice {
  constructor(private http: HttpClient) { }
 
  getJson(word: string): Observable<Idictionary> {
    return this.http.get<Idictionary[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).pipe(
      map(data => {
        let dic: Idictionary = {
          word: data[0].word,
          phonetics: data[0].phonetics,
          meanings: data[0].meanings,
          license: data[0].license,
          sourceUrls: data[0].sourceUrls
        };
        return dic;
      })
    );
  }
  
  
  
}
