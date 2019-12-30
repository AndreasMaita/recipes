import { Component } from '@angular/core';
import { ListsService } from '../list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  enteredItemName: string;
  enteredAmount: number;

  constructor(public listService: ListsService) {}

  onAddItem(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.listService.addList(form.value.enteredItemName, form.value.enteredAmount);

    form.reset();
  }

}
