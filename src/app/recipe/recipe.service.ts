import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../shared/recipe.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RecipeList {
  private recipes: Recipe[] = [];
  private recipesUpdated = new Subject<Recipe[]>();

  constructor(public http: HttpClient) {}
}

