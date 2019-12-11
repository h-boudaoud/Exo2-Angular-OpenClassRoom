import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public title: string;
  public edit: boolean;
  // tslint:disable-next-line:variable-name
  // public created_at: Date;
  // public loveIts: number;
  // public content: string;
  @Input() index: number;


  constructor(public postsService: PostsService) {
  }

  ngOnInit() {
    this.edit = false;
    // const post = this.postsService.postList[this.index];
    // this.title = post.title;
    // this.created_at = post.created_at;
    // this.loveIts = post.loveIts;
    // this.content = post.content;
    // console.log('PostListItemComponent -> index :', this.index, ' -  post :', post);
  }

  loveIt(rep) {
    this.postsService.onloveIt(this.index, rep);
    // console.log('loveIt(', rep, ') : ', this.postsService.postList[this.index]);
  }

  deletePost() {
    this.postsService.onDeletePost(this.index);
  }

  editePost() {
    this.edit = !this.edit;
  }
}
