import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IgxGridModule } from 'igniteui-angular';
import { Dummy_Data } from '../../rawData';

@Component({
  selector: 'app-grid-two',
  standalone: true,
  imports: [HeaderComponent, IgxGridModule],
  templateUrl: './grid-two.component.html',
  styleUrl: './grid-two.component.scss'
})
export class GridTwoComponent {
  title = "Sorting";
    data = Dummy_Data;
}
