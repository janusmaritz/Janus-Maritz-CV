import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { Experience } from '../../models';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [CommonModule, RouterModule, HttpClientModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  loadError = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Experience[]>('assets/data/experience.json').subscribe({
      next: data => this.experiences = data,
      error: () => this.loadError = true
    });
  }
}