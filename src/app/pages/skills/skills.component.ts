import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { SkillCategory } from '../../models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('600ms ease-out', style({ opacity: 1 }))
        ])
      ])
    ]
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [];
  loadError = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<SkillCategory[]>('assets/data/skills.json').subscribe({
      next: data => this.skillCategories = data,
      error: () => this.loadError = true
    });
  }
}