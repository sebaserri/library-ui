import { Component, OnInit } from '@angular/core';
import Author from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors: Author[];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this._init();
  }

  private _init() {
    this.authorService.all().subscribe(response => {
      this.authors = response.result;
      console.log(this.authors);
    }, e => {
      console.error(e);
    });
  }

  delete(id) {
    this.authorService.delete(id).subscribe(res => {
      console.info(res.result);
      this._init();
    }, e => {
      console.error(e);
    });
  }

}
