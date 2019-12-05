import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ListsService } from './list.service';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private listSub: Subscription;

  constructor(public listService: ListsService) {}

  ngOnInit() {
    this.listService.getList();
    this.listSub = this.listService.getListUpdateListener()
    .subscribe((list: Ingredient[]) => {
      this.ingredients = list;
    });
  }

  ngOnDestroy() {
    this.listSub.unsubscribe();
  }
}
