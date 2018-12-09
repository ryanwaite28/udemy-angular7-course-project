import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'amount': new FormControl(null, [Validators.required])
  });

  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipesService) { }

  ngOnInit() {
  }

  addItem() {
    const { name, amount } = this.form.value;
    const ingredient = new IngredientModel(name, +amount);
    this.shoppingListService.addIngredient(ingredient);
    this.clearForm();
  }

  clearForm() {
    this.form.reset();
  }
}
