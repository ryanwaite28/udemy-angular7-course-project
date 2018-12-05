import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { RecipeModel } from '../recipes/recipe.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeResolver implements Resolve<RecipeModel> {
    constructor(
        private recipesService: RecipesService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<RecipeModel> | Promise<RecipeModel> | RecipeModel {
        return this.recipesService.getRecipeByIndex(+route.params['id']);
    }
}
