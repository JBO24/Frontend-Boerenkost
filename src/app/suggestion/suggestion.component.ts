import {Component, OnInit} from '@angular/core';
import {Result} from '../model/Result';
import {SuggestionService} from '../suggestion.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {ModalComponent} from './modal/modal.component';
import {Ingredient} from '../model/Ingredient';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  result: Result;
  bsModalRef: BsModalRef;

  constructor(public suggestionservice: SuggestionService, public bsModalService: BsModalService) {

  }

  openModalWithComponent(ingredients: Ingredient[]) {
    this.suggestionservice.setData(ingredients);
    this.bsModalRef = this.bsModalService.show(ModalComponent);
    this.bsModalRef.content.closeBtnName = 'Close';

  }
  ngOnInit() {

  }
}
