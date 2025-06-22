import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CitiVelocityComponent } from './citi-velocity/citi-velocity.component';
import { CitiPulseComponent } from './citi-pulse/citi-pulse.component';
import { LmsComponent } from './lms/lms.component';
import { EssComponent } from './ess/ess.component';
import { AdwapComponent } from './adwap/adwap.component';
import { SinapsisComponent } from './sinapsis/sinapsis.component';
import { ShimadzuComponent } from './shimadzu/shimadzu.component';
import { MobotixComponent } from './mobotix/mobotix.component';
import { HieComponent } from './hie/hie.component';

interface Project {
  id: string;
  name: string;
  company: string;
  technologies: string;
  role: string;
  duration: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  componentMap: Record<string, any> = {
    velocity: CitiVelocityComponent,
    pulse: CitiPulseComponent,
    lms: LmsComponent,
    ess: EssComponent,
    adwap: AdwapComponent,
    sinapsis: SinapsisComponent,
    shimadzu: ShimadzuComponent,
    mobotix: MobotixComponent,
    hie: HieComponent,
  };

  projects: Project[] = [
    {
      id: 'velocity',
      name: 'Citi Velocity',
      company: 'Citi',
      technologies: 'Angular 19, TypeScript, REST APIs, WebSocket',
      role: 'Senior Software Engineer - Officer (C11)',
      duration: 'Nov 2022 - Present',
    },
    {
      id: 'pulse',
      name: 'CitiFX Pulse',
      company: 'Citi',
      technologies: 'Angular 19, TypeScript, REST APIs, WebSocket',
      role: 'Senior Software Engineer - Officer (C11)',
      duration: 'Nov 2022 - Present',
    },
    {
      id: 'lms',
      name: 'LMS',
      company: 'Indium Software',
      technologies: 'Angular 12, TypeScript, REST APIs',
      role: 'Senior Software Engineer',
      duration: 'Jan 2021 - Nov 2022',
    },
    {
      id: 'ess',
      name: 'ESS',
      company: 'Indium Software',
      technologies: 'Ionic 5, Angular 11, TypeScript, REST APIs',
      role: 'Senior Software Engineer',
      duration: 'Jan 2021 - Nov 2022',
    },
    {
      id: 'adwap',
      name: 'ADWAP',
      company: 'Wekancode',
      technologies: 'Angular 10, TypeScript, REST APIs, ANT design',
      role: 'Software Development Engineer',
      duration: 'Feb 2020 - Jun 2020',
    },
    {
      id: 'sinapsis',
      name: 'Sinapsis',
      company: 'Wekancode',
      technologies: 'Angular 9, TypeScript, REST APIs, Websocket, Angular Material',
      role: 'Software Development Engineer',
      duration: 'Jun 2020 - Oct 2020',
    },
    {
      id: 'shimadzu',
      name: 'Shimadzu',
      company: 'Ideaplunge Solutions',
      technologies: 'Angular 6, TypeScript, REST APIs, Angular Material',
      role: 'Application Developer',
      duration: 'Feb 2019 - Jan 2020',
    },
    {
      id: 'mobotix',
      name: 'MOBOTIX TOOLBOX',
      company: 'Ideaplunge Solutions',
      technologies: 'Angular 6, TypeScript, REST APIs, Angular Material',
      role: 'Application Developer',
      duration: 'Feb 2019 - Jan 2020',
    },
    {
      id: 'hie',
      name: 'HIE',
      company: 'AigilxHealth Technologies',
      technologies: 'Angular 2-6, TypeScript, REST APIs, NodeJs',
      role: 'Software Engineer',
      duration: 'May 2017 - Jan 2019',
    },
  ];

  activeProjectId = this.projects[0].id;

  selectProject(id: string) {
    this.activeProjectId = id;
  }
}
