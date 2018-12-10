import { RecipesService } from '../services/recipes.service';
import { RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeExistsActivator implements CanActivate {
    constructor(
        private recipesService: RecipesService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const id = route.params['id'];
        return this.recipesService.recipeExistsAtIndex(+id);
    }
}
