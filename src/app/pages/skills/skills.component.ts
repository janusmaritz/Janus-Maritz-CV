import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

interface Skill {
  name: string;
  description: string;
  level: number;
}

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
  skills: Skill[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Skill[]>('assets/data/skills.json').subscribe(data => {
      this.skills = data;
    });
  }

  getIconClass(skillName: string): string {
    const iconMap: Record<string, string> = {
      'Angular': 'fab fa-angular',
      'C# / .NET': 'fas fa-code',
      'SQL': 'fas fa-database',
      'HTML / CSS': 'fab fa-html5',
      'JavaScript / TypeScript': 'fab fa-js',
      'Git': 'fab fa-git-alt'
    };

    return iconMap[skillName] || 'fas fa-tools';
  }
}
