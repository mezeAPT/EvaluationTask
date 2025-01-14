import { Component, OnInit } from '@angular/core';
import { Dummy_Data } from '../../rawData';
import { HeaderComponent } from '../header/header.component';
import { ColumnType, IgxGridComponent, IgxPaginatorComponent } from 'igniteui-angular';

@Component({
  selector: 'app-grid-one',
  standalone: true,
  imports: [HeaderComponent, IgxGridComponent, IgxPaginatorComponent],
  templateUrl: './grid-one.component.html',
  styleUrl: './grid-one.component.scss'
})
export class GridOneComponent implements OnInit{
  title = "Paging";
  data = Dummy_Data;

  ngOnInit(): void {
    this.data = Dummy_Data;
  }

  public onColumnInit(column: ColumnType): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }
}
