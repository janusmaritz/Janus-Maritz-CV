import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [CommonModule, RouterModule, HttpClientModule]
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
