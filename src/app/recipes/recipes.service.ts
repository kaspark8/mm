import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'nr1',
      title: 'Viini Šnitsel',
      imageUrl:
        'https://nami-nami.ee/files//recipes/8007/viinisnitselalc.jpg',
      ingredients: ['Seafilee', 'Riivsai', 'Muna', 'Nisujahu']
    },
    {
      id: 'nr2',
      title: 'Soolased sõõrikud lõhega',
      imageUrl:
        'https://nami-nami.ee/files//recipes/21892/SONERAkalas66rikud.jpg',
      ingredients: ['Muna', 'Sibul', 'Lõhe', 'Jahu', 'Sool']
    }
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
