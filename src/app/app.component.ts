import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-dictionary';
}
