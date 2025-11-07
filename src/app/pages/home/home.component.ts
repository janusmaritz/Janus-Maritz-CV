import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
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
  imports: [ButtonComponent]
})
export class HomeComponent {

  downloadCV() {
    const filePath = 'assets/documents/JanusMaritzResume.pdf';

    const fileName = 'JanusMaritz_CV.pdf';

    const a = document.createElement('a');

    a.href = filePath;
    a.download = fileName;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
  }
}
