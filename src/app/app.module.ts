import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoRepository} from './domain/model/todo/todo-repository';
import {MemoryTodoRepository} from './infrastructure/repository/memory-todo-repository';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./presentation/di/module/top.module').then(m => m.TopModule)
      }
    ])
  ],
  providers: [
    {
      provide: TodoRepository,
      useClass: MemoryTodoRepository
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
