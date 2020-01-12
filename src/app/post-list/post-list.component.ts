import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() postList: any[];

  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute
  ) {
    console.log('PostListComponent ->postsService :', postsService);
    console.log('PostListComponent ->postList :', this.postList);
  }

  ngOnInit() {
      this.postList =  this.postsService.postList ;
  }

}
