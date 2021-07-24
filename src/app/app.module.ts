import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TODOFooter } from './components/todo-footer/todo-footer.component';
import { TODOHomeComponent } from './components/todo-home/todo-home.component';
import { TODOComponent } from './components/todo/todo-component';

@NgModule({
  declarations: [
    AppComponent,
    TODOHomeComponent,
    TODOComponent,
    TODOFooter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
