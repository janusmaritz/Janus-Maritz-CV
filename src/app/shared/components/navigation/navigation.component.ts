import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, DropdownComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavComponent {}
