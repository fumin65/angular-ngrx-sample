import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {TodoRegistrationState} from './todo-register.reducer';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {register} from './todo-register.actions';
import {selectEditable, selectErrorMessage} from './todo-register.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-register-fragment',
  templateUrl: './todo-register-fragment.component.html',
  styleUrls: ['./todo-register-fragment.component.css']
})
export class TodoRegisterFragmentComponent implements OnInit {

  form: FormGroup;
  editable$: Observable<boolean>;

  constructor(
    private store: Store<TodoRegistrationState>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.form = formBuilder.group({
      name: ''
    });
  }

  ngOnInit() {
    this.editable$ = this.store.pipe(select(selectEditable));
    this.editable$.subscribe(editable => {
      if (editable) {
        this.form.reset();
        this.form.enable();
      } else {
        this.form.disable();
      }
    });
    this.store.pipe(select(selectErrorMessage))
      .subscribe(errorMessage => {
        if (errorMessage) {
          this.snackBar.open(errorMessage, null, {
            duration: 3000
          });
        }
      });
  }

  onAddClicked(value) {
    this.store.dispatch(register({name: value.name}));
  }

}
