import { Component } from '@angular/core';
import { ListsService } from '../list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  enteredItemName: string;
  enteredAmount: number;

  constructor(public listService: ListsService) {}

  onAddItem() {
    this.listService.addList(this.enteredItemName, this.enteredAmount);
  }

}
