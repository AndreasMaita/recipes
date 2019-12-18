import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';
import { ListsService } from '../list.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit, OnDestroy {
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

  onDelete(IngreID: string) {
    this.listService.deleteItem(IngreID);
  }

  ngOnDestroy() {
    this.listSub.unsubscribe();
  }



}
