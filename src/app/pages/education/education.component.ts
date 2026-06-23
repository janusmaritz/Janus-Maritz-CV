import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Education, Certificate } from '../../models';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  certificate: Certificate[] = [];
  loadError = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Education[]>('assets/data/education.json').subscribe({
      next: data => this.education = data,
      error: () => this.loadError = true
    });

    this.http.get<Certificate[]>('assets/data/certificate.json').subscribe({
      next: data => this.certificate = data,
      error: () => this.loadError = true
    });
  }
}
