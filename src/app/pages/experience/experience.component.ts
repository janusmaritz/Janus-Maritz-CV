import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

interface Responsibility {
  focus: string;
  detail: string;
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: Responsibility[];
  technologies: string[];
}

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Experience[]>('assets/data/experience.json').subscribe(data => {
      this.experiences = data;
    });
  }
}