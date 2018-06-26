import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  text;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.text = "Hello min"
    },3000)
  }

}
