import { IngredientModel } from '../shared/ingredient.model';

export class RecipeModel {
  public name: string;
  public description: string;
  public image: string;
  public ingredients: IngredientModel[];

  constructor(name: string, description: string, image: string, ingredients: IngredientModel[]) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.ingredients = ingredients;
  }
}
