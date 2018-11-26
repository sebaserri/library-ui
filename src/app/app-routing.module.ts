import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorCreateComponent } from './author/author-create/author-create.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { PublicationCreateComponent } from './publication/publication-create/publication-create.component';
import { PublicationEditComponent } from './publication/publication-edit/publication-edit.component';
import { PublicationListComponent } from './publication/publication-list/publication-list.component';


const routes: Routes = [
  {
    path: 'author/create',
    component: AuthorCreateComponent
  },
  {
    path: 'author/edit/:id',
    component: AuthorEditComponent
  },
  {
    path: 'author/list',
    component: AuthorListComponent
  },
  {
    path: 'publication/create',
    component: PublicationCreateComponent

  },
  {
    path: 'publication/edit/:id',
    component: PublicationEditComponent
  },
  {
    path: 'publication/list',
    component: PublicationListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'author/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
