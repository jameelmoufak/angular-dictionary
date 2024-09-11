import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { dictionaryservice } from './dictionary.service';
import { FormsModule } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsModule,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit,OnChanges {

  word?: string;
  fullurl:string=' ';
constructor(private dictionaryservice: dictionaryservice) {
}

  ngOnChanges(changes: SimpleChanges): void 
  {
       
   }

    ngOnInit(): void 
    {
      this.fullurl=this.dictionaryservice.getword(this.word);
      console.log(this.fullurl);
      console.log(JSON.stringify(this.dictionary$));
    }
      
    dictionary$=this.dictionaryservice.dictionary$;
  url(){
    this.fullurl=this.dictionaryservice.getword(this.word);
    console.log(this.fullurl);
      console.log(JSON.stringify(this.dictionary$));
  }
  /*
  st():void
  {
    this.word = this.dictionaryservice.getValueProp();
    console.log(this.word);  
  }*/
  title = 'angular-dictionary';
}
