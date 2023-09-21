import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from '../todos/todos.component';
import { SingleTodosComponent } from '../single-todos/single-todos.component';
const routes: Routes = [
  { path: 'Todos', component: TodosComponent },
  { path: 'Todos/:id', component: SingleTodosComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
