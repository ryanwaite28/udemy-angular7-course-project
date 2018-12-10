import { Injectable, EventEmitter } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<IngredientModel[]>();

  private ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 5),
    new IngredientModel('Pepper', 7),
    new IngredientModel('Tomato', 2)
  ];

  constructor() { }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredientsBulk(ingredients: IngredientModel[]): void {
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
    this.ingredientsChanged.next(this.getIngredients());
  }

  getIngredients(): IngredientModel[] {
    return this.ingredients.slice();
  }

<<<<<<< HEAD
  removeIngredient(i) {
=======
  removeIngredient(i: number): void {
>>>>>>> 3a4a23a7e27212da548d3d1735588a61b56c5c83
    this.ingredients.splice(i, 1);
    this.ingredientsChanged.next(this.getIngredients());
  }
}
