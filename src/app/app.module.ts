import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { TodosComponent } from '../todos/todos.component';
import { SingleTodosComponent } from '../single-todos/single-todos.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosService } from '../todos.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TodosComponent,
    SingleTodosComponent,
    NavbarComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TodosService],
})
export class AppModule {}
