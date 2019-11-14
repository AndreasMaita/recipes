import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Spiegelei', 'Pfanne erhitzen -> Öl/Butter einwerfen -> Ei einlegen'),
    new Recipe('Spaghetti Aglio e Olio', 'prendere Spaghetti e buttali nel aqua')];


  constructor() { }s

  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
    // fetch Recipes from the Database
  }

  onrecipeSelected(recipe: Recipe) {
    this.theRecipe.emit(recipe);
  }

}
