import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Result} from './model/Result';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SuggestionService {
  public _sharedResult: Result;

  constructor(private http:HttpClient) {

  }
  getResultMock(): Observable<Result> {
    return this.http.get<Result>("assets/mockdata.json");
  }


  getResult(query: string) {
    console.log(query);
    this.http.get<Result>("http://localhost:8081/api/recipe/search?search="+query).subscribe(data =>
    {
      this._sharedResult = data;
    });
  }
}
