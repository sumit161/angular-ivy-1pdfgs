import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodosService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private _http: HttpClient) {}
  getAllTodos(): Observable<any> {
    return this._http.get<any>(this.baseUrl);
  }
  getSingleobj(id: any): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}/${id}`);
  }
}
