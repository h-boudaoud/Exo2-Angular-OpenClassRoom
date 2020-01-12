import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostAddComponent } from './post-add/post-add.component';

import { PostsService } from './services/posts.service';
import { ExerciceComponent } from './exercice/exercice.component';
import { ErrorComponent } from './error/error.component';



const routes: Routes = [
  {path: 'add', component: PostAddComponent},
  {path: 'edit/:id', component: PostAddComponent},
  {path: 'posts/:id', component: PostListItemComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'exercice', component: ExerciceComponent},
  {path: 'error', component: ErrorComponent},
  {path: '', component: PostListComponent},
  {path: '**', redirectTo: 'error'},
];



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    PostAddComponent,
    ExerciceComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
