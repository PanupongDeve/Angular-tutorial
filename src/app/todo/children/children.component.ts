import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('mount children');
  }

}
