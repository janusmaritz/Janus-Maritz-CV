import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Education {
  institution: string;
  period: string;
  degree: string;
  description: string;
}

interface Certificate {
  institution: string;
  certificate: string;
  obtained: string;
  about: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  education: Education [] = [];
  certificate: Certificate[] = [];

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.http.get<Education[]>('assets/data/education.json').subscribe(data => {
      this.education = data;
    })

    this.http.get<Certificate[]>('assets/data/certificate.json').subscribe(data => {
      this.certificate = data;
    })
  }

}
