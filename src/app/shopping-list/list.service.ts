import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ListsService {
 private ingredients: string[] = [];
 private listUpdated = new Subject<string[]>();


 getList() {
   return [...this.ingredients];
 }

 getListUpdateListener() {
   return this.listUpdated.asObservable();
 }

 addList(title: string) {
   const formTitle: string = title;
   this.ingredients.push(formTitle);
   this.listUpdated.next([...this.ingredients]);
  }

}
