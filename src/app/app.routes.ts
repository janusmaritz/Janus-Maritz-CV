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
    path: 'skills',
    title: 'Skills - Janus Maritz',
    loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: 'experience',
    title: 'Experience - Janus Maritz',
    loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent)
  },
  {
    path: 'contact',
    title: 'Contact - Janus Maritz',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  }
];
