import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { dictionaryservice } from './dictionary.service';
import { FormsModule } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { EMPTY, isEmpty, map, Observable, tap, timeout } from 'rxjs';
import { Idictionary } from './dictionary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
[x: string]: any;

  constructor(private dictionaryservice: dictionaryservice) { }

  searchWord: string = "";
  dicInfo: Idictionary | undefined;
  audiosrc:any='';
  wordsearchnotfound:string='';

  getDictionary() {
    this.dictionaryservice.getDicionary(this.searchWord).
      subscribe(response => {
        this.dicInfo = response;
        this.audiosrc=this.dicInfo.phonetics[0].audio;
      });
  }
  playaudio()
  {
    let audio = new Audio();
  audio.src = this.audiosrc;
  audio.play();
  this.wordsearchnotfound='';
  audio.play()
       .catch(() => {
              console.log('the word search is not found');
              this.wordsearchnotfound="the word search is not found"
  });
  }
  

  title = 'angular-dictionary';
}
