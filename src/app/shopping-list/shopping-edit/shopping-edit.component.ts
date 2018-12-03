import { Component, OnInit, ViewChild, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    let name = this.nameInput.nativeElement.value;
    let amount = this.amountInput.nativeElement.value;
    let ingredient = new IngredientModel(name, amount);
    this.ingredientAdded.emit(ingredient);
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

  clearForm() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

}
