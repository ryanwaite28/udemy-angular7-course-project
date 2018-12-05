import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredientsBulk(this.recipe.ingredients);
  }

}
