import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostAddComponent} from './post-add/post-add.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostListItemComponent} from './post-list-item/post-list-item.component';
import {ExerciceComponent} from './exercice/exercice.component';


const routes: Routes = [
  {path: 'add', component: PostAddComponent},
  {path: 'edit/:id', component: PostAddComponent},
  {path: 'posts/:id', component: PostListItemComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'exercice', component: ExerciceComponent},
];



// @ts-ignore
@NgModule({
  imports: [
     RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
