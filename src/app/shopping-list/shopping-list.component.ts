import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ListsService } from './list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: string[] = [];
  private listSub: Subscription;

  constructor(public listService: ListsService) {}

  ngOnInit() {
    this.ingredients = this.listService.getList();
    this.listSub = this.listService.getListUpdateListener()
    .subscribe((list: string[]) => {
      this.ingredients = list;
    });
  }

  ngOnDestroy() {
    this.listSub.unsubscribe();
  }
}
