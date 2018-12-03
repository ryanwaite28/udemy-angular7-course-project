import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('Chicken noodle', 'Campbell Chicken Noodle Soup', 'https://lh3.googleusercontent.com/Ri1Y6MYXMpzZfFV21rS5UQo9_4Dwa9itIHNouymzrTG-Q6mX7_4OX6EpERf7i4sxJx-9a43WZYsz0zEPZFtZy3w8KyuW7znfV6GMyg=w600-l68'),
    new RecipeModel('Panera Bread: Salad', 'Asian Sesame Salad with Chicken', 'https://www.panerabread.com/content/dam/panerabread/menu/grid/asian-sesame-chicken-salad-whole.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<RecipeModel>();

  onRecipeSelect(recipe: RecipeModel) {
    this.recipeSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
