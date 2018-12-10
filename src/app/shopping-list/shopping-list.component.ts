import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IngredientModel[];
  subscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    });
  }

  removeIngredient(i) {
    this.shoppingListService.removeIngredient(i);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
