import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactInfo = {
    email: 'rajkumar.ponnusamy6095@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rajkumar-ponnusamy-414198146/',
    phone: '+91-8838579857',
  };
}
