
import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
export const ROUTES: Routes = [
  {
    path: 'users',
    component: ListComponent
  },
  {
    path:'users/add',
    component: AddEditComponent
  },
  {
    path:'users/add/:id',
    component: AddEditComponent
  }
];