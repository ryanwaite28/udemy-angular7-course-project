import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { RecipeModel } from '../recipe.model';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'description': new FormControl(null, [Validators.required]),
    'image': new FormControl(null, [Validators.required]),
    'ingredients': new FormArray([])
  });
  isEditing = false;
  recipe: RecipeModel;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      if (data['recipe']) {
        this.recipe = data['recipe'];
        this.isEditing = true;
        setTimeout(() => {
          this.form.patchValue({
            'name': this.recipe.name,
            'description': this.recipe.description,
            'image': this.recipe.image
          });
          this.initIngredients();
          console.log(this);
        }, 10);
      }
    });
  }

  submitForm() {

  }

  initIngredients() {
    this.recipe.ingredients.forEach(ig => {
      (<FormArray>this.form.get('ingredients')).push(new FormGroup({
        name: new FormControl(ig.name, [Validators.required]),
        amount: new FormControl(ig.amount, [Validators.required])
      }));
    });
  }

  addIngredient() {
    const c = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required])
    });
    (<FormArray>this.form.get('ingredients')).push(c);
  }
}
