import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShowListComponent } from './shopping-list/show-list/show-list.component';

const routes: Routes = [
  { path: '', component: ShowListComponent },
  { path: 'create', component: ShoppingEditComponent },
  { path: 'edit/:itemId', component: ShoppingEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
