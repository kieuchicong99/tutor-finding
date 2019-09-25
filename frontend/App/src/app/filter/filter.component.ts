import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../model/field.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  @Input() filter :Array<Field>;





  check(item:Field){
    if (item.value=true)
      item.value = false;
    else
      item.value= true;
  }

  ngOnInit() {
  }

}

