import { Injectable } from '@angular/core';
import { RecipeModel } from '../recipes/recipe.model';
import { IngredientModel } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChanged = new Subject<RecipeModel[]>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Chicken noodle',
      'Campbell Chicken Noodle Soup',
      'https://lh3.googleusercontent.com/Ri1Y6MYXMpzZfFV21' +
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
      ],
    ),
    new RecipeModel(
      'Burher King - Whopper',
      'The best burger ever invented...',
      'https://bk-apac-prd.s3.amazonaws.com/' +
      'sites/burgerking.co.nz/files/BUR1678' +
      '-BBQ-Bacon-thumbnail-500x400-v01_0.png',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Beef', 1),
        new IngredientModel('Cheese', 1),
        new IngredientModel('Bacon', 4),
        new IngredientModel('Lettuce', 1),
        new IngredientModel('Pickles', 5),
        new IngredientModel('Onions', 3),
        new IngredientModel('Tomatoes', 2)
      ]
    )
  ];

  constructor() { }

  addRecipe(recipe: RecipeModel): number {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
    return this.recipes.length - 1;
  }

  removeRecipe(id: number): void {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.getRecipes());
  }

  getRecipes(): RecipeModel[] {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number): RecipeModel {
    return this.recipes.slice()[index] || null;
  }

  recipeExistsAtIndex(index: number): boolean {
    return this.recipes.slice()[index] ? true : false;
  }
}
