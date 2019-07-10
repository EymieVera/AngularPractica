import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/_services/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  // styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = [];
  data: any = [];
  users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selected: any;
  constructor(
    private postServiceService: PostServiceService
  ) {
    this.selected = 1;
    this.getPosts(1);
  }

  ngOnInit() {
  }

  getPosts(filtro) {
    this.posts = [];
    this.data = [];
    this.postServiceService.getDataPost()
    .subscribe(x => {
      this.posts = x;
      console.log(x);
      console.log(filtro);
      this.data = this.posts.filter(element => {
        return element.userId == filtro;
      });
      console.log('resultado');
      console.log(this.data);
    });
  }

  select(item: any) {
    console.log('items');
    console.log(item.target.value);
    this.selected = item.target.value;
    this.getPosts(this.selected );
  }

}
