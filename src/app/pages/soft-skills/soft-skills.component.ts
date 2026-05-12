import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

interface SoftSkill {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class SoftSkillsComponent implements OnInit {
  skills: SoftSkill[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<SoftSkill[]>('assets/data/softskills.json').subscribe(data => {
      this.skills = data;
    });
  }
}