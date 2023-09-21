import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-single-todos',
  templateUrl: './single-todos.component.html',
  styleUrls: ['./single-todos.component.css'],
})
export class SingleTodosComponent implements OnInit {
  Obj: any;
  id: any;
  status: boolean;
  constructor(
    private _TodosService: TodosService,
    private _routes: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this._routes.snapshot.params['id'];
    this._TodosService.getSingleobj(this.id).subscribe((resp) => {
      this.Obj = resp;
      this.status = this.Obj.completed;
    });
  }
  callback() {
    this.status = !this.status;
    this.Obj = {
      userId: this.Obj.userId,
      id: this.Obj.id,
      title: this.Obj.title,
      completed: this.status,
    };
  }
}
