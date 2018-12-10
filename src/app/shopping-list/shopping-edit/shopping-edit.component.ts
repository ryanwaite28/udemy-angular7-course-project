<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
=======
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
>>>>>>> 3a4a23a7e27212da548d3d1735588a61b56c5c83
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
<<<<<<< HEAD
  @ViewChild('f') form: NgForm;
=======
  form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'amount': new FormControl(null, [Validators.required])
  });
>>>>>>> 3a4a23a7e27212da548d3d1735588a61b56c5c83

  constructor(
    private shoppingListService: ShoppingListService,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
  }

<<<<<<< HEAD
  addIngredient() {
    const { name, amount } = this.form.value;
    if (this.form.valid === false) { return; }
    const ingredient = new IngredientModel(name, amount);
    this.shoppingListService.addIngredient(ingredient);
=======
  addItem() {
    const { name, amount } = this.form.value;
    const ingredient = new IngredientModel(name, +amount);
    this.shoppingListService.addIngredient(ingredient);
    this.clearForm();
  }

  clearForm() {
>>>>>>> 3a4a23a7e27212da548d3d1735588a61b56c5c83
    this.form.reset();
  }
}
