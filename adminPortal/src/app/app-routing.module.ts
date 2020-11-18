import { UsersComponent } from './users/users.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { AddCompanyComponent } from './add-company/add-company.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] },
  { path: 'product-list', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'user-list', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'add-company', component: AddCompanyComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: ProductAddComponent, canActivate: [AuthGuard] },
  { path: 'company-detail/:id', component: CompanyDetailComponent, canActivate: [AuthGuard] },
  { path: 'product-detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'edit-company/:id', component: EditCompanyComponent, canActivate: [AuthGuard] },
  { path: 'edit-product/:id', component: ProductEditComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
