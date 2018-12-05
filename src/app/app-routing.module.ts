import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';



const app_routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'create', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent, resolve: { recipe: RecipeResolver } },
        { path: ':id/edit', component: RecipeEditComponent, resolve: { recipe: RecipeResolver } }
    ] },
    { path: 'shopping',  component: ShoppingListComponent },
    { path: '**', redirectTo: '/recipes' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
