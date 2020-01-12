import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private pageTitles: {
    add: string
    , edit: string
    , posts: string
    , exercice: string
    , error: string
  };
  constructor() {
    this.pageTitles = {
      add: 'ajouter un nouveau post'
      , edit: 'Modifier le post d\'id'
      , posts: 'la list des posts'
      , exercice: 'Enoncé de l\'exercice'
      , error: 'Error in url'
    };
  }

  public pageTitle(id: string, urlParams?: [string]): string {
    return this.pageTitles[id] + ' : ' + ( urlParams ? urlParams.join('/') : '');
}
}
