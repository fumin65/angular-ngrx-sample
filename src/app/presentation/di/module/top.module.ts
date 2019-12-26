import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListItemElementComponent} from '../../ui/top/todo-list-item-element/todo-list-item-element.component';
import {TopPageComponent} from '../../ui/top/top-page/top-page.component';
import {TodoListFragmentComponent} from '../../ui/top/todo-list-fragment/todo-list-fragment.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {TodoRegisterFragmentComponent} from '../../ui/top/todo-register-fragment/todo-register-fragment.component';
import {StoreModule} from '@ngrx/store';
import * as TodoRegisterReducer from '../../ui/top/todo-register-fragment/todo-register.reducer';
import * as TodoListReducer from '../../ui/top/todo-list-fragment/todo-list.reducer';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {TodoRegisterEffects} from '../../ui/top/todo-register-fragment/todo-register.effects';
import {TodoListEffects} from '../../ui/top/todo-list-fragment/todo-list.effects';


@NgModule({
  declarations: [
    TodoListItemElementComponent,
    TopPageComponent,
    TodoListFragmentComponent,
    TodoRegisterFragmentComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forFeature(TodoRegisterReducer.todoRegisterFeatureKey, TodoRegisterReducer.reducer),
    StoreModule.forFeature(TodoListReducer.todoListFeatureKey, TodoListReducer.reducer),
    EffectsModule.forFeature([TodoRegisterEffects, TodoListEffects]),
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TopPageComponent
      }
    ])
  ]
})
export class TopModule {
}
