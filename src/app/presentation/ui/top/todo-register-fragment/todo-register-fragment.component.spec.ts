import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRegisterFragmentComponent } from './todo-register-fragment.component';

describe('TodoRegisterFragmentComponent', () => {
  let component: TodoRegisterFragmentComponent;
  let fixture: ComponentFixture<TodoRegisterFragmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoRegisterFragmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoRegisterFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
