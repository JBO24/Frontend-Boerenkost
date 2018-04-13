import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Ingredient} from '../../model/Ingredient';
import {SuggestionService} from '../../suggestion.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  title: string = "Ingredients";
  ingredients: Ingredient[];

  constructor(public bsModalRef: BsModalRef, public suggestionService: SuggestionService) {}

  ngOnInit() {
    this.ingredients = this.suggestionService.getIngredient();
  }

}
