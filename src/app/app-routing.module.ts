import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShowListComponent } from './shopping-list/show-list/show-list.component';

const routes: Routes = [
  { path: '', component: ShowListComponent },
  { path: 'create', component: ShoppingEditComponent }
];

@NgModule({

})
export class AppRoutingModule {}
