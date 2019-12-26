import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {TodoListState} from './todo-list.reducer';
import {selectTodoList} from './todo-list.selectors';
import {loadTodoList} from './todo-list.actions';

@Component({
  selector: 'app-todo-list-fragment',
  templateUrl: './todo-list-fragment.component.html',
  styleUrls: ['./todo-list-fragment.component.css']
})
export class TodoListFragmentComponent implements OnInit {

  todoList$ = this.store.pipe(select(selectTodoList));

  constructor(
    private store: Store<TodoListState>
  ) {
  }

  ngOnInit() {
    this.store.dispatch(loadTodoList());
  }

}
