import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home - Janus Maritz',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    title: 'Home - Janus Maritz',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'skills/technical',
    title: 'Technical Skills - Janus Maritz',
    loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent)
  },
   {
    path: 'skills/soft',
    title: 'Soft Skills - Janus Maritz',
    loadComponent: () => import('./pages/soft-skills/soft-skills.component').then(m => m.SoftSkillsComponent)
  },
  {
    path: 'experience',
    title: 'Experience - Janus Maritz',
    loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent)
  },
  {
    path: 'education',
    title: 'Education- Janus Maritz',
    loadComponent: () => import('./pages/education/education.component').then(m => m.EducationComponent)
  },
  {
    path: 'contact',
    title: 'Contact - Janus Maritz',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  }
];
