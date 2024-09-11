import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { dictionaryservice } from './dictionary.service';
import { FormsModule } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { map, tap, timeout } from 'rxjs';
import { Idictionary } from './dictionary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  constructor(private dictionaryservice: dictionaryservice) { }
  word: string = "apple";
  dicInfo:Idictionary|undefined;
  word1:string|undefined;
  ngOnInit(): void {
  
  }
  getDictionary(){
   this.dictionaryservice.getJson(this.word).
    subscribe(response=>{
      this.dicInfo=response;
      this.word1=response.word
    });
    //console.log(JSON.stringify(this.dicInfo?.word))
    //console.log(JSON.stringify(this.dicInfo?.phonetics))
    console.log(JSON.stringify(this.dicInfo?.meanings[0].partOfSpeech))
    console.log(JSON.stringify(this.dicInfo?.meanings[0].definitions[0].definition))

   // console.log(JSON.stringify(this.dicInfo?.license))
   // console.log(JSON.stringify(this.dicInfo?.sourceUrls))

    /*
    //this.word1=this.dicInfo?.word;
    console.log(JSON.stringify(this.word1));
    console.log(this.dicInfo?.word);
    console.log(JSON.stringify(this.dicInfo?.license));
    console.log(JSON.stringify(this.dicInfo?.sourceUrls));
    console.log(JSON.stringify(this.dicInfo?.phonetics));
    for (let index = 0; index < this.dicInfo?.meanings.length; index++) {
      const element = this.dicInfo?.meanings[index];
      console.log(element);
      
    }
*/
    /*
    const fruits = ["apple", "orange", "cherry"];
    fruits.forEach(myFunction);
    */
  }
  title = 'angular-dictionary';
}
