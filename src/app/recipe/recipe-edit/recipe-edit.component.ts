import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  public enteredRecipeName: string;
  public enteredRecipeAuthor: string;

  constructor() { }

  ngOnInit() {
  }

  onSaveRecipe(form: NgForm) {

  }

}
