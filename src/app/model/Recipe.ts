import {Ingredient} from './Ingredient';

export class Recipe {
  id: number;
  label: string;
  image: string;
  source: string;
  url: string;
  calories: number;
  ingredients: Ingredient[];
}
