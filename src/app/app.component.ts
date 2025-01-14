import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IgxGridModule } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IgxGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EvaluationTask';
}
