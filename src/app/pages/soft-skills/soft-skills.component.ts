import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

interface SoftSkill {
  name: string;
  description: string;
  level: number;
}

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.scss',
  animations: [
        trigger('fadeIn', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate('600ms ease-out', style({ opacity: 1 }))
          ])
        ])
      ]
})
export class SoftSkillsComponent {
  skills: SoftSkill[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<SoftSkill[]>('assets/data/softskills.json').subscribe(data => {
      this.skills = data
    })
  }

  getIconClass(skillName: string): string {
    const iconMap: Record<string, string> = {
    'Communication': 'fas fa-comments',
    'Time Management': 'fas fa-clock',
    'Adaptability': 'fas fa-sync-alt',
    'Teamwork': 'fas fa-users',
    'Problem solving': 'fas fa-lightbulb',
    'Active Listening': 'fas fa-headphones'
  };

    return iconMap[skillName] || 'fas fa-tools';
  }

}
