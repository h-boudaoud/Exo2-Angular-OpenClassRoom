import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public name_component: boolean;
  // tslint:disable-next-line:variable-name
  public content_error: boolean;
  // tslint:disable-next-line:variable-name
  public title_error: boolean;
  // tslint:disable-next-line:variable-name
  public new_post = null;
  @Input() postList: any[];

  constructor() {

    this.name_component = false;
    this.new_post = null;
    this.title_error = true;
    this.content_error = true;
    this.new_post = {
      title: '',
      content: '',
      loveIts: 0,
      created_at: null
    };
  }

  ngOnInit() {
  }

  titleError() {
    const regex = RegExp('^[A-Za-z\\d\\- \'\")(\\][@:\\/,;.!àçèé°]+$');
    // console.log('this.new_post.title',this.new_post.title,'\nregex : ',regex.test(this.new_post.title.trim()))
    return !(this.new_post.title.trim().length === 0 || !regex.test(this.new_post.title.trim()));
  }
  contentError() {
    const regex = RegExp('^[A-Za-z\\d\\-\\s\'\")(\\][@:\\/,;.!àçèé°]+$');
    // console.log('this.new_post.content',this.new_post.title,'\nregex : ',regex.test(this.new_post.content.trim()))
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

      this.new_post.created_at = new Date();
      const index = this.postList.length;
      this.postList.push(this.new_post);
      this.name_component = (this.postList[index] === this.new_post);
      document.getElementById('post-add').style.height = h + 'px';
      document.getElementById('post-add').style.width = w + 'px';

      // console.log('new_post : ', this.new_post, '\npostList[', index, '] ', this.postList[index]);
    }
    // console.log('posts : ', this.postList);
  }
}
