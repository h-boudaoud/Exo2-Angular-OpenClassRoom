import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public active_submit: boolean;
  // tslint:disable-next-line:variable-name
  public content_error: boolean;
  // tslint:disable-next-line:variable-name
  public title_error: boolean;
  // tslint:disable-next-line:variable-name
  public new_post: { created_at: Date, last_update: Date; title: string; content: string; loveIts: number };
  @Input() index: number;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {
    console.log('postList constructor : ', this.postsService);
    console.log('this.postList.onLengthPostList() constructor : ', this.postsService.onLengthPostList());
  }

  ngOnInit() {
    this.active_submit = false;
    this.index = (this.route.snapshot.params.id) ? this.route.snapshot.params.id : this.index;

    if (this.index > -1) {
      this.new_post = this.postsService.postList[this.index];
    } else {
      this.new_post = {
        title: '',
        content: '',
        loveIts: 0,
        created_at: null,
        last_update: null
      };
    }
    this.title_error = true;
    this.content_error = true;
  }

  titleError() {
    const regex = RegExp('^[A-Za-z\\d\\- \'\")(\\][@:\\/,;.!àçèé°]+$');
    // console.log('this.new_post.title',this.new_post.title,'\nregex : ',regex.test(this.new_post.title.trim()))
    // @ts-ignore
    return !(this.new_post.title.trim().length === 0 || !regex.test(this.new_post.title.trim()));
  }

  contentError() {
    const regex = RegExp('^[A-Za-z\\d\\-\\s\'\")(\\][@:\\/,;.!àçèé°]+$');
    // console.log('this.new_post.content',this.new_post.title,'\nregex : ',regex.test(this.new_post.content.trim()))
    // @ts-ignore
    return !(this.new_post.content.trim().length === 0 || !regex.test(this.new_post.content.trim()));
  }

  onSubmit() {
    this.title_error = this.titleError();
    this.content_error = this.contentError();
    const validate = this.title_error && this.content_error;
    console.log('validate :', validate);
    if (this.title_error && this.content_error) {
      let h: number;
      let w: number;
      h = document.getElementById('post-add').offsetHeight;
      w = document.getElementById('post-add').offsetWidth;
      if (this.index > -1) {
        this.new_post.last_update = new Date();
      } else {
        this.index = this.postsService.onLengthPostList();
        // @ts-ignore
        this.new_post.created_at = new Date();
        this.postsService.onAddPost(this.new_post);
      }
      // console.log('new_post :', this.new_post);
      // console.log('index :', index);
      // console.log('postList :', this.postsService.postList);


      // console.log(index, 'postList Add :', this.new_post);
      // console.log('postList Add :', this.postsService);

      this.active_submit = (this.postsService.postList[this.index] === this.new_post);
      document.getElementById('post-add').style.height = h + 'px';
      document.getElementById('post-add').style.width = w + 'px';

      // console.log('new_post : ', this.new_post, '\npostList[', index, '] ', this.postList[index]);
    }
    // console.log('posts : ', this.postList);
  }
}
