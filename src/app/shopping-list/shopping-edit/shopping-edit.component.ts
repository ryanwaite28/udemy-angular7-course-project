import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { IngredientModel } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
    'amount': new FormControl(null, [Validators.required, Validators.min(1)])
  });
  subscription: Subscription;
  editMode = false;
  editItem: IngredientModel;
  editIndex: number;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.editStarted.subscribe((index: number) => {
      this.editMode = true;
      this.editIndex = index;
      this.editItem = this.shoppingListService.getIngredient(index);
      this.form.setValue({
        'name': this.editItem.name,
        'amount': this.editItem.amount
      });
    });
  }

  addItem() {
    const { name, amount } = this.form.value;
    if (this.editMode === true) {
      this.editItem.name = name;
      this.editItem.amount = amount;
    } else {
      const ingredient = new IngredientModel(name, +amount);
    this.shoppingListService.addIngredient(ingredient);
    }
    this.clearForm();
  }

  clearForm() {
    this.editMode = null;
    this.editIndex = null;
    this.editItem = null;
    this.form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
