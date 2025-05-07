import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-demo',
  imports: [ButtonModule],
  standalone: true,
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.css'
})
export class ButtonDemoComponent {

}
