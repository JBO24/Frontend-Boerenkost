import {Component, Input, OnInit, Output} from '@angular/core';
import {SuggestionService} from '../suggestion.service';
import {Result} from '../model/Result';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  query: any;
  constructor(private suggestionService: SuggestionService) { }

  ngOnInit() {
  }

  search(event: any) {
    this.query = event.target.value;
    this.suggestionService.getResult(this.query);
  }
}
