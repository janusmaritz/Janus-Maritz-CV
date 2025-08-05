import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface ContactItem {
  label: string;
  value: string;
  iconClass: string;
  link: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule]
})
export class ContactComponent implements OnInit {
  contactItems: ContactItem[] = [];

  constructor(private http: HttpClient) {}

 ngOnInit() {
    this.http.get<ContactItem[]>('assets/data/contact.json')
      .subscribe({
        next: data => this.contactItems = data
      });
  }
}
