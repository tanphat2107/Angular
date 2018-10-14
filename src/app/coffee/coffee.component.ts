import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  constructor() { }
table:any[];
tabs: any[]=[
  {name:'coffee', icon:'assets/coffee.png'},
  {name:'cup', icon:'assets/cup.png'},
  {name:'user', icon:'assets/user.png'}
]
  ngOnInit() {
  }

}
