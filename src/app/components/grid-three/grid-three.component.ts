import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IgxGridModule } from 'igniteui-angular';
import { Dummy_Data } from '../../rawData';

@Component({
  selector: 'app-grid-three',
  imports: [HeaderComponent, IgxGridModule],
  templateUrl: './grid-three.component.html',
  styleUrl: './grid-three.component.scss'
})
export class GridThreeComponent {
  title = "Filtering";
  data = Dummy_Data;
}
