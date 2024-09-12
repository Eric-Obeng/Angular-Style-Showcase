import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '0.5s 0.3s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class CaseStudyComponent {
  visible = false;

  onvisibile(isVisible: boolean) {
    this.visible = isVisible;
  }
}
