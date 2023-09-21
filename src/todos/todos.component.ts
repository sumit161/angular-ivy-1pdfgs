import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  TodosArr: Array<any>;
  completedCount: any;
  constructor(private _TodosService: TodosService) {}

  ngOnInit() {
    this._TodosService.getAllTodos().subscribe((resp) => {
      this.TodosArr = resp;
      this.completedCount = this.TodosArr.filter(
        (ele) => ele.completed === true
      ).length;
      // console.log(count);
    });
  }
}
