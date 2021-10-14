import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Testy Schinitzel','This is simply awsome',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
        [
            new Ingredient('Meat',1),
            new Ingredient('Fries',10)
        ]),
        new Recipe('A Big Burger','This is simply delicious',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
        ];

    constructor(private slService:ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addingredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredienst(ingredients);
    }
}