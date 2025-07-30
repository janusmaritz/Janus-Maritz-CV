import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button class="custom-btn">{{ label }}</button>`,
  styleUrls: ['./button.component.scss'],
  standalone: true
})
export class ButtonComponent {
  @Input() label = '';
}
