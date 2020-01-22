import { Component, OnInit } from '@angular/core';
import { ListsService } from '../list.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  enteredItemName: string;
  enteredAmount: number;
  item: Ingredient;
  private mode = 'create';
  private itemId: string;


  constructor(public listService: ListsService, public route: ActivatedRoute) {}

ngOnInit() {
    this.route.paramMap.subscribe( (paramMap: ParamMap) => {
      if (paramMap.has('itemId')) {
        this.mode = 'edit';
        this.itemId = paramMap.get('itemId');
        this.item = this.listService.getItem(this.itemId);
      } else {
        this.mode = 'create';
        this.itemId = null;
      }
    });
  }

  onSaveItem(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.listService.addList(form.value.enteredItemName, form.value.enteredAmount);
    } else {
      this.listService.updateItem(this.itemId, form.value.enteredItemName, form.value.enteredAmount);
    }
    form.resetForm();
  }



}
