import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';

import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoCreateComponent } from './components/produto-create/produto-create.component';
import { ProdutoDetailsComponent } from './components/produto-details/produto-details.component';
import { ProdutoEditComponent } from './components/produto-edit/produto-edit.component';

import { LoginComponent } from './components/login/login.component';

import { RegisterUserComponent } from './components/users/register-user.component';

import { UsersComponent } from './components/users/users.component';

import { EditUserComponent } from './components/users/edit-user.component';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes: Routes = [

  {
    path: '',
    component: ProdutoListComponent,
    canActivate: [authGuard]
  },

  {
    path: 'create',
    component: ProdutoCreateComponent,
    canActivate: [authGuard]
  },

  {
    path: 'details/:id',
    component: ProdutoDetailsComponent,
    canActivate: [authGuard]
  },

  {
    path: 'edit/:id',
    component: ProdutoEditComponent,
    canActivate: [authGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterUserComponent
  },

  {
    path: 'users',
    component: UsersComponent,
    canActivate: [authGuard]
  },

  {
    path: 'users/edit/:id',
    component: EditUserComponent,
    canActivate: [authGuard]
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },

  {
    path: '**',
    redirectTo: ''
  }
];