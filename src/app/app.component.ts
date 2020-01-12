import {Component} from '@angular/core';
import {PostsService} from './services/posts.service';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {TitleService} from './services/title.service';

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
  public pageTitle: string;

  // tslint:disable-next-line:variable-name no-shadowed-variable
  constructor(
    public postsService: PostsService,
    private titleService: TitleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.postList = this.postsService.postList;
    console.log('AppComponent -> posts :', this.postList.length, '\n', this.postList);
    this.name_component = (this.postList.length > 0) ? 'posts' : 'add';
    this.routeEvent(this.route);
  }

  change_component(component: string) {
    this.router.navigate([component]).then(r => true );
    /*
     console.log('route : ', this.route);
    */
  }

  routeEvent(route: ActivatedRoute) {
    let urlParams = null;
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd && e.url !== '/') {
        urlParams = e.url.split('/');
        urlParams.shift();
        console.log('this.route NavigationEnd url: ', urlParams[0]);
        this.name_component = urlParams.shift();
        console.log('this.route NavigationEnd e: ', e);
      }
      this.pageTitle = this.titleService.pageTitle(this.name_component, urlParams);
    });
  }
}
