import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  name: String;

  orderName: String;

  totalDishes: number;

  status: String;
  constructor() { 
    this.name = 'Table 1';

    this.orderName = 'Phát';

    this.totalDishes = 3;

    this.status = 'ready';

  }

  ngOnInit() {
  }

}
