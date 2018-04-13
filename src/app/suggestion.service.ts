import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Result} from './model/Result';
import {Ingredient} from './model/Ingredient';


@Injectable()
export class SuggestionService {
  public _sharedResult: Result;
  private _ingredient: Ingredient[];

  constructor(private http:HttpClient) {

  }
  getResultMock(): Observable<Result> {
    return this.http.get<Result>("assets/mockdata.json");
  }

  setData(ingredient: Ingredient[]) {
    this._ingredient = ingredient;
  }


  getIngredient(): Ingredient[] {
    return this._ingredient;
  }

  getResult(query: string) {
    console.log(query);
    this.http.get<Result>("http://localhost:8081/api/recipe/search?search="+query).subscribe(data =>
    {
      this._sharedResult = data;
    });
  }
}
