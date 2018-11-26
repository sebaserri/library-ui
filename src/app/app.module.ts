import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { AuthorCreateComponent } from './author/author-create/author-create.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { AuthorListComponent } from './author/author-list/author-list.component';

import { AuthorService } from './author/author.service';
import { PublicationService} from './publication/publication.service';

import { PublicationCreateComponent } from './publication/publication-create/publication-create.component';
import { PublicationEditComponent } from './publication/publication-edit/publication-edit.component';
import { PublicationListComponent } from './publication/publication-list/publication-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    AuthorListComponent,
    PublicationCreateComponent,
    PublicationEditComponent,
    PublicationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    FormsModule
  ],
  providers: [
    AuthorService,
    PublicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
