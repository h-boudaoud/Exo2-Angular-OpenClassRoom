import {Component} from '@angular/core';
import {PostsService} from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // tslint:disable-next-line:variable-name
  public name_component: string;
  public postList: any;
  // public oldPostList = [
  //   {
  //     title: 'post n°1',
  //     content: 'ceci est le premier post',
  //     loveIts: 3,
  //     created_at: new Date('2019-11-20 11:05:17')
  //   },
  //   {
  //     title: 'un autre post',
  //     content: 'hé oui\nUn nouveau post',
  //     loveIts: 0,
  //     created_at: new Date('2019-11-21 15:05:17')
  //   },
  //   {
  //     title: 'post numéro 3',
  //     content: 'le dernier post inutile\nTestant ce code',
  //     loveIts: -3,
  //     created_at: new Date('2019-11-22 11:05:17')
  //   },
  // ];
  public pageTitle = {
    add: 'ajouter un nouveau post'
    , list: 'la list des posts'
  };

  // tslint:disable-next-line:variable-name no-shadowed-variable
  constructor(public postsService: PostsService) {
    this.postList = this.postsService.postList;
    console.log('AppComponent -> posts :', this.postList.length, '\n', this.postList);
    this.name_component = (this.postList.length > 0) ? 'list' : 'add';
  }

  change_component(component: string) {
    this.name_component = component;
  }

  onClose() {
    this.name_component = 'list';
  }

}
