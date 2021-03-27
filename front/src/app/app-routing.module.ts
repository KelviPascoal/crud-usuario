import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './pages/users-form/users-form.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  { path: 'usuarios', component: UsersListComponent },
  { path: 'usuarios/cadastro', component: UsersFormComponent },
  { path: 'usuarios/editar/:id', component: UsersFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
