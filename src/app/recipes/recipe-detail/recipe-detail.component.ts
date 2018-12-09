import { RecipesService } from 'src/app/services/recipes.service';
import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeModel;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this);
    this.route.data.subscribe((data: Data) => {
      if (data['recipe']) {
        this.recipe = data['recipe'];
        this.id = +this.route.snapshot.params.id;
      } else {
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    });
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredientsBulk(this.recipe.ingredients);
  }

  removeRecipe() {
    this.recipesService.removeRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
