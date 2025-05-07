import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-home',
  imports: [AnimateOnScrollModule, AnimateOnScroll, AvatarGroupModule, AvatarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
