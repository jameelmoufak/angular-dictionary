import { HttpClient } from "@angular/common/http";
import { Injectable, OnChanges, SimpleChanges } from "@angular/core";
import { Idictionary } from "./dictionary";
import { map, Observable, take } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class dictionaryservice {
  constructor(private http: HttpClient) { }
  getJson(word:string): Observable<Idictionary>{
    return this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  }
}