import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: RecipeModel[];
  subscription: Subscription;

  constructor (private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.subscription = this.recipesService.recipesChanged.subscribe((recipes: RecipeModel[]) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
