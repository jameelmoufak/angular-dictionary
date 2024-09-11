import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { dictionaryservice } from './dictionary.service';
import { FormsModule } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { tap, timeout } from 'rxjs';
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
  word: string = "";
  dicInfo?:Idictionary;
  word1:string|undefined;
  ngOnInit(): void {
  }
  getDictionary(){
    this.dictionaryservice.getJson(this.word).subscribe(response=>{
      this.dicInfo=response;
    });
    console.log(JSON.stringify(this.dicInfo))
    //this.word1=this.dicInfo?.word;
    console.log(JSON.stringify(this.dicInfo?.word));
    console.log(JSON.stringify(this.dicInfo?.meanings));
    console.log(JSON.stringify(this.dicInfo?.license));
    console.log(JSON.stringify(this.dicInfo?.sourceUrls));
    console.log(JSON.stringify(this.dicInfo?.phonetics));
    
  }
  title = 'angular-dictionary';
}
