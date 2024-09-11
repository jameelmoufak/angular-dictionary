import { HttpClient } from "@angular/common/http";
import { Injectable, OnChanges, SimpleChanges } from "@angular/core";
import { Idictionary } from "./dictionary";
import { map, Observable, take } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class dictionaryservice implements OnChanges 
{
    fullurl:string='';
    test:any;
    constructor(private http:HttpClient)
    {
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.fullurl);
    }
   getword(searchword?:string): string {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    this.fullurl=url+searchword;
    console.log(this.fullurl);
    return this.fullurl;
}

dictionary$=this.http.get<object[]>(this.fullurl).subscribe((res)=>this.test=res);  



getvaluefromhson():Observable<Idictionary>
{
  return this.http.get<Idictionary>(this.fullurl).pipe(take(1));  
}

                     
                     
/*.pipe(map(d=>({
                        ...d,
                        d.
                     })as dictionary
                    ))*/
}