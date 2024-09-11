import { HttpClient } from "@angular/common/http";
import { Injectable, OnChanges, SimpleChanges } from "@angular/core";
import { dictionary } from "./dictionary";
import { map, tap } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class dictionaryservice implements OnChanges 
{
    fullurl:string='';
    constructor(private http:HttpClient)
    {
    }
    ngOnChanges(changes: SimpleChanges): void {
        //console.log(this.fullurl);
    }
   getword(searchword?:string): string {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    this.fullurl=url+searchword;
    //console.log(this.fullurl);
    return this.fullurl;
}
dictionary$=this.http.get<dictionary>(this.fullurl);

                     
                     
/*.pipe(map(d=>({
                        ...d,
                        d.
                     })as dictionary
                    ))*/
}