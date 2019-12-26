import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFragmentComponent } from './todo-list-fragment.component';

describe('TodoListFragmentComponent', () => {
  let component: TodoListFragmentComponent;
  let fixture: ComponentFixture<TodoListFragmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListFragmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
