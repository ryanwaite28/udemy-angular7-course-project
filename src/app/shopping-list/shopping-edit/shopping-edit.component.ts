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
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipesService) { }

  ngOnInit() {
  }

  addItem() {
    const name = this.nameInput.nativeElement.value;
    const amount = Number(this.amountInput.nativeElement.value);
    const ingredient = new IngredientModel(name, amount);
    this.shoppingListService.addIngredient(ingredient);
    this.clearForm();
  }

  clearForm() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

}
