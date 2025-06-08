import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employment-history',
  imports: [CommonModule],
  templateUrl: './employment-history.component.html',
  styleUrl: './employment-history.component.scss',
})
export class EmploymentHistoryComponent {
  experiences: any[] = [
    {
      company: 'Aigilx Health Technologies',
      position: 'Software Engineer',
      duration: 'May 2017 - Jan 2019',
      description: 'Worked on front-end development using AngularJS.',
      logo: 'assets/aigilx_logo.png',
    },
    {
      company: 'Ideaplunge Solutions',
      position: 'Application Developer',
      duration: 'Feb 2019 - Jan 2020',
      description: 'Led a team for building scalable microservices.',
      logo: 'assets/ideaplunge_logo.png',
    },
    {
      company: 'Wekancode Technologies',
      position: 'Software Development Engineer',
      duration: 'Feb 2020 - Oct 2020',
      description: 'Implemented CI/CD pipelines and optimized build processes.',
      logo: 'assets/wekan_logo.png',
    },
    {
      company: 'Indium Software',
      position: 'Senior Software Engineer',
      duration: 'Jan 2021 - Nov 2022',
      description: 'Managed 3 cross-functional teams in an agile environment.',
      logo: 'assets/indium_logo.png',
    },
    {
      company: 'Citicorp services India private Limited',
      position: 'Officer (C11)',
      duration: 'Nov 2022 - Present',
      description: 'Driving strategic tech initiatives and mentoring senior engineers.',
      logo: 'assets/citi_logo.png',
    },
  ];
}
