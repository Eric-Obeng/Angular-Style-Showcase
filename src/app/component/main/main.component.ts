import { Component } from '@angular/core';
import { OurServicesComponent } from "./our-services/our-services.component";
import { CaseStudyComponent } from "./case-study/case-study.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [OurServicesComponent, CaseStudyComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
