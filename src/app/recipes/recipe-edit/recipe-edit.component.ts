import { RecipesService } from 'src/app/services/recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { RecipeModel } from '../recipe.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IngredientModel } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  isEditing = false;
  recipe: RecipeModel;
  form: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'description': new FormControl(null, [Validators.required]),
    'image': new FormControl(null, [Validators.required]),
    'ingredients': new FormArray([])
  });

  ingredientsControls() {
    return (<FormArray>this.form.get('ingredients')).controls;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipesService: RecipesService
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
          const ingredientsList = (<FormArray>this.form.get('ingredients'));
          this.recipe.ingredients.forEach(ig => {
            ingredientsList.push(new FormGroup({
              'name': new FormControl(ig.name, [Validators.required]),
              'amount': new FormControl(ig.amount, [Validators.required])
            }));
          });
        }, 100);
      }
      console.log(this);
    });
  }

  addIngredient() {
    (<FormArray>this.form.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [Validators.required])
    }));

  }

  removeIngredient(i) {
    (<FormArray>this.form.get('ingredients')).removeAt(i);
  }

  submitForm() {
    if (this.form.valid === false) { return; }
    const { name, description, image } = this.form.value;
    const ingredients = this.form.value.ingredients.map(ig => {
      return new IngredientModel(ig['name'], +ig['amount']);
    });
    if (this.isEditing === true) {
      this.recipe.name = name;
      this.recipe.description = description;
      this.recipe.image = image;
      this.recipe.ingredients = ingredients;
      this.router.navigate(['../'], { relativeTo: this.route });
    } else {
      const new_recipe = new RecipeModel(name, description, image, ingredients);
      const id = this.recipesService.addRecipe(new_recipe);
      this.router.navigate(['../', id], { relativeTo: this.route });
    }
  }
}
