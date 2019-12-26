import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemElementComponent } from './todo-list-item-element.component';

describe('TodoListItemElementComponent', () => {
  let component: TodoListItemElementComponent;
  let fixture: ComponentFixture<TodoListItemElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListItemElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
