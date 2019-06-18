import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'user/:name', component: UserComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, UserComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
