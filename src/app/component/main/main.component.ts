import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from './our-services/our-services.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { IntersectionObserverDirective } from '../../intersection-observer.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    CommonModule,
    OurServicesComponent,
    CaseStudyComponent,
    IntersectionObserverDirective,
  ],
})
export class MainComponent {
  ourServicesVisible = false;
  caseStudyVisible = false;

  onOurServicesVisible(isVisible: boolean): void {
    this.ourServicesVisible = isVisible;
  }

  onCaseStudyVisible(isVisible: boolean): void {
    this.caseStudyVisible = isVisible;
  }
}
