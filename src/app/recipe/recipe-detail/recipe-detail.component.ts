import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListsService } from 'src/app/shopping-list/list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  ingredients: string[] = [];
  private listSub: Subscription;

  constructor(public listService: ListsService) { }

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
