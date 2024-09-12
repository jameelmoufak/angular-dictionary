import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { dictionaryservice } from './dictionary.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Idictionary } from './dictionary';
import { catchError, EMPTY, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnDestroy {
  constructor(private dictionaryservice: dictionaryservice) { }

  searchWord: string = "";
  dicInfo: Idictionary | undefined;
  audiosrc: any = '';
  wordsearchnotfound: string = '';
  subscription?: Subscription;
  found:boolean= true;
  getDictionary() {
    this.subscription = this.dictionaryservice.getDicionary(this.searchWord).
      subscribe(response => {
        this.dicInfo = response;
      });

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  playaudio() {
    for (let i = 0; i < this.dicInfo?.phonetics.length; i++) {
      if(this.dicInfo?.phonetics[i].audio!=''){
        this.audiosrc=this.dicInfo?.phonetics[i].audio;
        break;
      }
    }
    let audio = new Audio();
    audio.src = this.audiosrc;
    this.wordsearchnotfound = '';
    audio.play()
    .catch(() => {
      console.log('the word search is not found');
      this.wordsearchnotfound = "the word search is not found"
    });
  }
}
