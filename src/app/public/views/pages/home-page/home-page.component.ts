import { Component } from '@angular/core';
import {TheSidebarComponent} from '../../components/the-sidebar/the-sidebar.component';

@Component({
  selector: 'app-home-page',
  imports: [
    TheSidebarComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
