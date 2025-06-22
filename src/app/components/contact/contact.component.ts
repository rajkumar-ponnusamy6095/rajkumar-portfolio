import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  sendEmail() {
    const email = 'rajkumar.ponnusamy6095@gmail.com';
    const subject = 'Would like to connect!';
    const body = 'Hello,';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
