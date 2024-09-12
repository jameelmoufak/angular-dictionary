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

  constructor(private dictionaryservice: dictionaryservice) { }

  searchWord: string = "";
  dicInfo: Idictionary | undefined;

  getDictionary() {
    this.dictionaryservice.getDicionary(this.searchWord).
      subscribe(response => {
        this.dicInfo = response;
      });
  }

  title = 'angular-dictionary';
}
