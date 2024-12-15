import { Routes } from '@angular/router';
import {HomePageComponent} from './public/views/pages/home-page/home-page.component';
import {CharactersPageComponent} from './public/views/pages/characters-page/characters-page.component';
import {DrawingsPageComponent} from './public/views/pages/drawings-page/drawings-page.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'drawings', component: DrawingsPageComponent}
  // {path: '**', component: PageNotFoundComponent}
];
