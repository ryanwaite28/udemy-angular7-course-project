import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../../recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  itemClick() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }

}
