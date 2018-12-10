import { Component, OnInit, ViewChild } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
  }

  addIngredient() {
    const { name, amount } = this.form.value;
    if (this.form.valid === false) { return; }
    const ingredient = new IngredientModel(name, amount);
    this.shoppingListService.addIngredient(ingredient);
    this.form.reset();
  }

}
