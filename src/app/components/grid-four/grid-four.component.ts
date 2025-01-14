import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IgxGridComponent, IgxGridModule } from 'igniteui-angular';
import { Dummy_Data } from '../../rawData';

@Component({
  selector: 'app-grid-four',
  imports: [HeaderComponent, IgxGridModule],
  templateUrl: './grid-four.component.html',
  styleUrl: './grid-four.component.scss'
})
export class GridFourComponent implements OnInit {  
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;
  title = "Editing";
  data = Dummy_Data;

  public ngOnInit() {
    this.data = Dummy_Data;
  }
}
