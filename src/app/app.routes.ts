import { Routes } from '@angular/router';
import {HomePageComponent} from './public/views/pages/home-page/home-page.component';
import {CharactersPageComponent} from './public/views/pages/characters-page/characters-page.component';
import {DrawingsPageComponent} from './public/views/pages/drawings-page/drawings-page.component';
import {GifsPageComponent} from './public/views/pages/gifs-page/gifs-page.component';
import {SanrioClubPageComponent} from './public/views/pages/sanrio-club-page/sanrio-club-page.component';
import {
  SanrioClubSignupPageComponent
} from './public/views/pages/sanrio-club-signup-page/sanrio-club-signup-page.component';
import {ArtCornerPageComponent} from './public/views/pages/art-corner-page/art-corner-page.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'drawings', component: DrawingsPageComponent},
  {path: 'gifs', component: GifsPageComponent},
  {path: 'sanrio-club', component: SanrioClubPageComponent},
  {path: 'sanrio-club-signup', component: SanrioClubSignupPageComponent},
  {path: 'art-corner', component: ArtCornerPageComponent}
  // {path: '**', component: PageNotFoundComponent}
];
