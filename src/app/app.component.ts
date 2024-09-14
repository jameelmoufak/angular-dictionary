import { Component, OnDestroy } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { dictionaryservice } from './dictionary.service';
import { FormsModule } from '@angular/forms';
import { Idictionary } from './dictionary';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabsModule, FormsModule],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnDestroy {
  constructor(private dictionaryservice: dictionaryservice) { }

  dicInfo: Idictionary | undefined;//to get dictionary info
  audiosrc: string = '';//to get src of audio 
  subscription?: Subscription;//for OnDestroy 
  found: boolean = false;//to check if search word exist 
  private _searchWord: string = ''//to bind input text
  public get SearchWord() {
    return this._searchWord;
  }
  public set SearchWord(value: string) {
    this._searchWord = value;

    this.subscription = this.dictionaryservice.getDicionary(this._searchWord).
      subscribe(
        (response => {
          //here set properties values if search word is exist 
          this.dicInfo = response;
          this.found = true;
          this.audiosrc = ''
          for (let i = 0; i < this.dicInfo?.phonetics.length; i++) {
            if (this.dicInfo?.phonetics[i].audio != '') {
              this.audiosrc = this.dicInfo?.phonetics[i].audio;
              break;
            }
          }
        }),
        //if search word is not exist 
        (() => this.found = false),
      );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  //to play audio
  playaudio() {
    let audio = new Audio();
    audio.src = this.audiosrc;
    console.log(audio.src)
    audio.play()
      .catch(() => {
        console.log('the word search is not found');
      });
  }
}
