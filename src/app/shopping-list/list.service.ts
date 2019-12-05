import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class ListsService {
 private ingredients: Ingredient[] = [];
 private listUpdated = new Subject<Ingredient[]>();

  constructor(private http: HttpClient) {}

 getList() {
   this.http.get<{message: string, ingredients: Ingredient[]}>('http://localhost:8080/api/shoppingitems')
   .subscribe( (postData) => {
      this.ingredients = postData.ingredients;
      this.listUpdated.next([...this.ingredients]);
   });
 }

 getListUpdateListener() {
   return this.listUpdated.asObservable();
 }

 addList(title: string) {
   const ingredient: Ingredient = {id: null, name: title, amount: null };
   this.ingredients.push(ingredient);
   this.listUpdated.next([...this.ingredients]);
  }

}
