import { Injectable, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipes/recipe.model';
import { IngredientModel } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  @Output() recipeSelected: EventEmitter<RecipeModel> = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Chicken noodle',
      'Campbell Chicken Noodle Soup',
      'http://lh3.googleusercontent.com/Ri1Y6MYXMpzZfFV21' +
      'rS5UQo9_4Dwa9itIHNouymzrTG-Q6mX7_4OX6EpERf7i4sxJx-' +
      '9a43WZYsz0zEPZFtZy3w8KyuW7znfV6GMyg=w600-l68',
      [
        new IngredientModel('Chicken Bits', 4),
        new IngredientModel('Carrots', 7),
        new IngredientModel('Peas', 9)
      ]
    ),
    new RecipeModel(
      'Panera Bread: Salad',
      'Asian Sesame Salad with Chicken',
      'https://www.panerabread.com/foundation/menu/grid' +
      '/asian-sesame-chicken-salad-whole.jpg/_jcr_content' +
      '/renditions/asian-sesame-chicken-salad-whole.desktop.jpeg',
      [
        new IngredientModel('Wonton Strips', 12),
        new IngredientModel('Chicken Strips', 4),
        new IngredientModel('Sesame Seeds', 25),
        new IngredientModel('Lettuce', 8)
      ]
    )
  ];

  constructor() { }

  getRecipes(): RecipeModel[] {
    return this.recipes.slice();
  }
}
