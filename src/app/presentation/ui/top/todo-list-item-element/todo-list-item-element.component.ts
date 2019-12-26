import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../../../domain/model/todo/todo';

@Component({
  selector: 'app-todo-list-item-element',
  templateUrl: './todo-list-item-element.component.html',
  styleUrls: ['./todo-list-item-element.component.css']
})
export class TodoListItemElementComponent implements OnInit {

  @Input() todo: Todo;

  constructor() {
  }

  ngOnInit() {
  }

}
