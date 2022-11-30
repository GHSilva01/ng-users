import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { HomeComponent } from './views/home/home.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "users",
  component: UserCrudComponent
}, {
  path: "users/create",
  component: UserCreateComponent
}, {
  path: "users/update/:id",
  component: UserUpdateComponent
}, {
  path: "users/delete/:id",
  component: UserDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
