import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ],
  imports: [CommonModule, ButtonComponent]
})
export class HomeComponent {

  // Added areas of familiarity here for clean HTML rendering
  areasOfFamiliarity: string[] = [
    'Full-Stack Development', 
    'Cloud Operations', 
    'DevOps Integration', 
    'Data Handling', 
    'Agile Methodology', 
    'Support'
  ];

  downloadCV() {
    const filePath = 'assets/documents/Janus_Resume.pdf';
    const fileName = 'Janus_Resume.pdf';
    const a = document.createElement('a');

    a.href = filePath;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}