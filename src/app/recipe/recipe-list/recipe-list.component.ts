import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListsService } from 'src/app/shopping-list/list.service';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private listSub: Subscription;

  constructor(public listService: ListsService) { }

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

  onDelete() {

  }



}
