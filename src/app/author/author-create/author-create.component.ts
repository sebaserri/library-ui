import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

import Author from '../author';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss']
})
export class AuthorCreateComponent implements OnInit {

  author: Author = new Author();

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }
 
  save() {
    this.authorService.create(this.author).subscribe((response) => {
      console.info("success");
      console.info(response.result);
    }, e => {
      console.error(e);
    });
    this.author = new Author();
  }

}
