import { Component } from '@angular/core';
import { HighlightDirective } from '../../../shared/directive/highlight.directive';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HighlightDirective, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
