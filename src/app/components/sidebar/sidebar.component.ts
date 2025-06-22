import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/resume/Rajkumar_Ponnusamy_CV.pdf';
    link.download = 'Rajkumar_Ponnusamy_CV.pdf'; // optional: rename when downloading
    link.target = '_blank'; // optional: open in new tab
    link.click();
  }
}
