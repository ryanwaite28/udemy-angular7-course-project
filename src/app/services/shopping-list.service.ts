import { Injectable, EventEmitter } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();

  private ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 5),
    new IngredientModel('Pepper', 7)
  ];

  constructor() { }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsBulk(ingredients: IngredientModel[]) {
    for (const ingredient of ingredients) {
      const find = this.ingredients.filter(i => i.name.toLowerCase() === ingredient.name.toLowerCase())[0];
      const index = this.ingredients.findIndex(i => i.name.toLowerCase() === ingredient.name.toLowerCase());
      if (find) {
        find.amount = find.amount + ingredient.amount;
        this.ingredients[index] = find;
      }  else {
        const new_ingredient = new IngredientModel(ingredient.name, ingredient.amount);
        this.ingredients.push(new_ingredient);
      }
    }

    this.ingredientsChanged.emit(this.getIngredients());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
