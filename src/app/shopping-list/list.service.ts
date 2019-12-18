import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ListsService {
 private ingredients: Ingredient[] = [];
 private listUpdated = new Subject<Ingredient[]>();

  constructor(private http: HttpClient) {}

 getList() {
   this.http.get<{message: string, ingredients: any}>('http://localhost:8080/api/shoppingitems')
   .pipe(map((ingredientData) => {
      return ingredientData.ingredients.map(ingredient => {
          return {
            id: ingredient._id,
            name: ingredient.name,
            amount: ingredient.amount
          };
      });
   }))
   .subscribe( (ingredientData) => {
      this.ingredients = ingredientData;
      this.listUpdated.next([...this.ingredients]);
   });
 }

 getListUpdateListener() {
   return this.listUpdated.asObservable();
 }

 addList(nameForm: string, amountForm: number) {
   const ingredient: Ingredient = {id: null, name: nameForm, amount: amountForm };
   this.http.post<{message: string, id: string}>('http://localhost:8080/api/shoppingitems', ingredient)
    .subscribe( (responseData) => {
      const id = responseData.id;
      ingredient.id = id;
      this.ingredients.push(ingredient);
      this.listUpdated.next([...this.ingredients]);
    });
  }

  deleteItem(IngreID: string) {
    this.http.delete('http://localhost:8080/api/shoppingitems/' + IngreID)
    .subscribe(() => {
      const newList = this.ingredients.filter( ingredient => ingredient.id !== IngreID);
      this.ingredients = newList;
      this.listUpdated.next([...this.ingredients]);
    });
  }

}
