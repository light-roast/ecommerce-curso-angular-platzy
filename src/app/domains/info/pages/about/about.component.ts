import { Component } from '@angular/core';
import { HighlightDirective } from '../../../shared/directive/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
