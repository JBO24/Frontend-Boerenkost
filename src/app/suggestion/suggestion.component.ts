import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../model/Result';
import {SuggestionService} from '../suggestion.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  result: Result;

  constructor(public suggestionservice: SuggestionService) { }

  ngOnInit() {

  }
}
