import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';
import Author from '../author';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {

  isLoaded: Boolean = false;
  author: Author;

  constructor(private route: ActivatedRoute, private router: Router, private authorService: AuthorService) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.authorService.getById(params['id']).subscribe(res => {
        this.author = res.result[0];
        console.log(this.author);
        this.isLoaded = true;
      }, e => {
        console.error(e);
      });
    });
  }

  update() {
       this.authorService.update(this.author).subscribe(response => {
         console.info(response.result);
         this.router.navigate(['author/list']);
       }, e => {
         console.error(e);
       });
  }
}
