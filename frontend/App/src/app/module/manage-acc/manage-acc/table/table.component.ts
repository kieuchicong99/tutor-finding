import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

dataTable  = [
	{name:'Superman', subject:'Toán', method:'Tại nhà', cost:'200.000/buổi', date:'06.11.2019', status:'Waiting'},
	{name:'Batman', subject:'Lý', method:'Online', cost:'200.000/buổi', date:'06.11.2019', status:'Waiting'},
	{name:'BatGirl', subject:'Hóa', method:'Tại nhà', cost:'200.000/buổi', date:'06.11.2019', status:'Waiting'},
	{name:'Robin', subject:'Anh', method:'Tại nhà', cost:'200.000/buổi', date:'06.11.2019', status:'Waiting'},
	{name:'Flash', subject:'Văn', method:'Online + Tại nhà', cost:'200.000/buổi', date:'06.11.2019', status:'Waiting'}
	];

  constructor() { }

  ngOnInit() {
  }
  @Input() content:{}
  

}
