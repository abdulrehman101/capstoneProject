import { AddCompanyComponent } from './add-company/add-company.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ServicesComponent,
    CompaniesListComponent,
    AddCompanyComponent,
    CompanyDetailComponent,
    EditCompanyComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    AuthModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
