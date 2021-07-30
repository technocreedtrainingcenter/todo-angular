import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TODOFooter } from './components/todo-footer/todo-footer.component';
import { TODOHomeComponent } from './components/todo-home/todo-home.component';
import { TODOComponent } from './components/todo/todo-component';
import { HighlightDirective } from './directive/highlight.directive';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TODOHomeComponent,
    TODOComponent,
    TODOFooter,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
